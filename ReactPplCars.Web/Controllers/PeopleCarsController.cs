using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using ReactPplCars.Data;

namespace ReactPplCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarsController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpGet]
        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpPost]
        [Route("AddPerson")]
        public void AddPerson(Person p)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddPerson(p);
        }
        [HttpPost]
        [Route("AddCar")]
        public void AddCar(Car c)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.AddCar(c);
        }
        [HttpGet]
        [Route("GetCars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetCars(id);
        }
        [HttpGet]
        [Route("GetById")]
        public Person GetById(int id) 
        {
            var repo = new PeopleCarsRepository(_connectionString);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("DeleteCarsForPerson")]
        public void DeleteCarsForPerson(int id)
        {
            var repo = new PeopleCarsRepository(_connectionString);
            repo.DeleteCarsForPerson(id);
        }
    }
}
