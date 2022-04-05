using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPplCars.Data
{
    public class PeopleCarsDbContext : DbContext
    {
        private readonly string _connectionString;
        public PeopleCarsDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Person> People { get; set; }
        public DbSet<Car> Cars { get; set; }
    }

}
