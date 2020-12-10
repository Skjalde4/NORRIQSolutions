using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NORRIQ_Solutions.Model;

namespace NORRIQ_Solutions.Data
{
    public class NORRIQ_SolutionsContext : DbContext
    {
        public NORRIQ_SolutionsContext (DbContextOptions<NORRIQ_SolutionsContext> options)
            : base(options)
        {
        }

        public DbSet<NORRIQ_Solutions.Model.User> User { get; set; }
    }
}
