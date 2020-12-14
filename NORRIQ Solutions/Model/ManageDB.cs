using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

namespace NORRIQ_Solutions.Model
{
    public class ManageDB
    {
        const string connectionstring = "Data Source=norriqsolutionsdbserver.database.windows.net;Initial Catalog=NORRIQSolutions_db;User ID=norriqadmin;Password=norriq1234!;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        private const string GET_ALL = "select * from Customer";
        public List<User> UserList = new List<User>();

        public IEnumerable<User> GetAll()
        {
            using (SqlConnection conn = new SqlConnection(connectionstring))
            using (SqlCommand cmd = new SqlCommand(GET_ALL, conn))
            {
                conn.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    User user = ReadNextElement(reader);
                    UserList.Add(user);
                }

                reader.Close();

            }

            return UserList;
        }

        protected User ReadNextElement(SqlDataReader reader)
        {
            User user = new User();
            user.CustomerId = reader.GetInt32(0);
            user.CvrNo = reader.GetInt32(1);
            user.CompanyName = reader.GetString(2);
            user.ContactPerson = reader.GetString(3);
            user.Email = reader.GetString(4);
            user.PhoneNo = reader.GetInt32(5);

            return user;

        }

        public void Add(User user)
        {
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                if (conn.State == ConnectionState.Open)
                {
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "insert into Customer values (@Param1,@Param2,@Param3,@Param4,@Param5,@Param6)";
                        cmd.Parameters.AddWithValue("@param1", user.CustomerId);
                        cmd.Parameters.AddWithValue("@Param2", user.CvrNo);
                        cmd.Parameters.AddWithValue("@Param3", user.CompanyName);
                        cmd.Parameters.AddWithValue("@Param4", user.ContactPerson);
                        cmd.Parameters.AddWithValue("@Param5", user.Email);
                        cmd.Parameters.AddWithValue("@Param6", user.PhoneNo);

                        cmd.ExecuteNonQuery();

                        var json = new JavaScriptSerializer().Serialize(user);
                    }
                }
            }

        }

        public void Delete(int customerId)
        {
            using (SqlConnection conn = new SqlConnection(connectionstring))
            {
                conn.Open();
                if (conn.State == ConnectionState.Open)
                {
                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = "delete from Customer where CustomerId=@ID";
                        cmd.Parameters.AddWithValue("@ID", customerId);
                        cmd.ExecuteNonQuery();
                    }
                }
            }
        }
    }
}
