using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TalentplusApi.Models;

namespace TalentplusApi.Services
{
    public class Message
    {
        public MessageModel SayHi()
        {
            MessageModel message = new MessageModel();
            message.Message = "Hi TalentPlus";
            return message;
        }
    }
}
