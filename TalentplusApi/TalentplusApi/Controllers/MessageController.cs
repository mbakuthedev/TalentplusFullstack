using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TalentplusApi.Services;

namespace TalentplusApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MessageController : ControllerBase
    {
        private  Message _message;
        public MessageController(Message message)
        {
            _message = message;
        }
        [HttpGet]
        public IActionResult Greet()
        {
            return Ok(_message.SayHi());   
        }
    }
}
