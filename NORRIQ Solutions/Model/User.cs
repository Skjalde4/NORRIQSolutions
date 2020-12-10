using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NORRIQ_Solutions.Model
{
    public class User
    {
        [Key]
        public int CustomerId { get; set; }
        public int CvrNo { get; set; }
        public string CompanyName { get; set; }
        public string ContactPerson { get; set; }
        public string Email { get; set; }
        public int PhoneNo { get; set; }

        public User(int customerId, int cvrNo, string companyName, string contactPerson, string email, int phoneNo)
        {
            CustomerId = customerId;
            CvrNo = cvrNo;
            CompanyName = companyName;
            ContactPerson = contactPerson;
            Email = email;
            PhoneNo = phoneNo;
        }

        public User()
        {
        }
    }
}
