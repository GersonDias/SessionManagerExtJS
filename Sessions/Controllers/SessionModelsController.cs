using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Sessions.Models;

namespace Sessions.Controllers
{
    public class SessionController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/SessionModels
        public IQueryable<SessionModels> GetSessionModels()
        {
            return db.SessionModels;
        }

        // GET: api/SessionModels/5
        [ResponseType(typeof(SessionModels))]
        public async Task<IHttpActionResult> GetSessionModels(int id)
        {
            SessionModels sessionModels = await db.SessionModels.FindAsync(id);
            if (sessionModels == null)
            {
                return NotFound();
            }

            return Ok(sessionModels);
        }

        // PUT: api/SessionModels/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutSessionModels(int id, SessionModels sessionModels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sessionModels.id)
            {
                return BadRequest();
            }

            db.Entry(sessionModels).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SessionModelsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SessionModels
        [ResponseType(typeof(SessionModels))]
        public async Task<IHttpActionResult> PostSessionModels(SessionModels sessionModels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SessionModels.Add(sessionModels);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = sessionModels.id }, sessionModels);
        }

        // DELETE: api/SessionModels/5
        [ResponseType(typeof(SessionModels))]
        public async Task<IHttpActionResult> DeleteSessionModels(int id)
        {
            SessionModels sessionModels = await db.SessionModels.FindAsync(id);
            if (sessionModels == null)
            {
                return NotFound();
            }

            db.SessionModels.Remove(sessionModels);
            await db.SaveChangesAsync();

            return Ok(sessionModels);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SessionModelsExists(int id)
        {
            return db.SessionModels.Count(e => e.id == id) > 0;
        }
    }
}