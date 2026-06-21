import Link from "next/link";
import { FaArrowLeft, FaServer, FaGlobe, FaDatabase, FaExchangeAlt } from "react-icons/fa";

export default function VeloWikiBlog() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-12 lg:px-16 animate-fadeIn">
      <div className="mx-auto max-w-3xl">
        {/* Navigation */}
        <div className="mb-10">
          <Link
            href="/blogs"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-mono
              uppercase
              tracking-wider
              text-neutral-400
              hover:text-amber-400
              transition-colors
              duration-200
            "
          >
            <FaArrowLeft className="text-xs" />
            Back to Blogs
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Full Stack", "FastAPI", "Next.js", "PostgreSQL"].map((tag) => (
              <span
                key={tag}
                className="
                  border
                  border-neutral-800
                  px-2.5
                  py-0.5
                  text-[10px]
                  font-mono
                  uppercase
                  tracking-wider
                  text-amber-400
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              leading-tight
              text-white
              mb-6
            "
          >
            VeloWiKi: How I Built a Custom CRM and Directory for VeloCET
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span>Published: June 21, 2026</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <a
              href="https://github.com/anand1946s/crm_velo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500 hover:text-amber-400 transition-colors"
            >
              Source Code ↗
            </a>
          </div>

          <div className="h-0.5 bg-neutral-800 w-full mt-8" />
        </header>

        {/* Blog Body */}
        <article className="prose prose-invert max-w-none font-sans text-neutral-300 leading-relaxed space-y-8">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Why I Built This</h2>
            <p>
              As my club VeloCET, grew in members and projects, a simple Google sheet was no longer an option
              to track members,project status,active members, club alumni and industry connections. A need for a
              custom database catering to my club's needs was imminent. Although i explored other open source alternatives,
              they were too feature-rich or too complex for my needs. I decided to come up with my own solution
            </p>
            <p>
              I decided to build a custom tool called <strong>VeloWiKi</strong>. My main
              goal was to create a secure, reliable dashboard where coordinators can quickly view
              everyone's details, assign members to projects, and keep data clean.
            </p>
          </section>

          {/* System Architecture */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white tracking-tight">How the System Works</h2>
            <p>
              The application is split into three main parts: a FastAPI backend, a Next.js web application
              and a PostgreSQL database.
            </p>

            {/* Architecture Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="border border-neutral-800 bg-neutral-950/30 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 text-2xl mb-3">
                    <FaGlobe />
                  </div>
                  <h4 className="font-bold text-white font-mono text-sm uppercase tracking-wide">Next.js Web Portal</h4>
                  <p className="text-xs text-neutral-400 mt-2 font-sans">
                    My primary interface. It handles lists of club members, project boards, and admin tools behind a secure login.
                  </p>
                </div>
              </div>

              <div className="border border-neutral-800 bg-neutral-950/30 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 text-2xl mb-3">
                    <FaServer />
                  </div>
                  <h4 className="font-bold text-white font-mono text-sm uppercase tracking-wide">FastAPI Backend</h4>
                  <p className="text-xs text-neutral-400 mt-2 font-sans">
                    The core API that handles database queries, input validation, and checks if user emails are authorized.
                  </p>
                </div>
              </div>

              <div className="border border-neutral-800 bg-neutral-950/30 p-5 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="text-amber-500 text-2xl mb-3">
                    <FaDatabase />
                  </div>
                  <h4 className="font-bold text-white font-mono text-sm uppercase tracking-wide">PostgreSQL DB</h4>
                  <p className="text-xs text-neutral-400 mt-2 font-sans">
                    Stores all user login lists, member records, and project assignments securely.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm font-mono text-neutral-400 bg-neutral-950/80 border border-neutral-800 p-4 rounded-md">
              [Next.js Frontend ] &lt;--- JSON REST API ---&gt; [FastAPI Backend] &lt;--- SQLAlchemy ORM ---&gt; [PostgreSQL Database]
            </p>
          </section>

          {/* Database Schema Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Database Layout</h2>
            <p>
              I designed the database to track active members, mentors, and graduates cleanly.
              Here is a look at the main tables. It may not be normalised and scalable for a big setup.but yea,
              for the club this seemed almost good (Atleast for a few years).
            </p>

            <div className="overflow-x-auto border border-neutral-800 rounded-lg">
              <table className="min-w-full divide-y divide-neutral-800 text-left text-xs font-mono">
                <thead className="bg-neutral-950 text-neutral-400 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Table</th>
                    <th className="px-4 py-3">Primary Columns</th>
                    <th className="px-4 py-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-neutral-950/20 text-neutral-300">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-white">persons</td>
                    <td className="px-4 py-3">id, name, email, phone, type (MEMBER, ALUMNI, MENTOR)</td>
                    <td className="px-4 py-3">Stores details of everyone connected to the club</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-white">memberships</td>
                    <td className="px-4 py-3">id, person_id, doj (Date of Joining), dol (Date of Leaving)</td>
                    <td className="px-4 py-3">Tracks when members join or leave the club over time</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-white">projects</td>
                    <td className="px-4 py-3">id, name, description, status (IN_PROGRESS, COMPLETED, ABORTED)</td>
                    <td className="px-4 py-3">Tracks team projects and their status</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-white">project_members</td>
                    <td className="px-4 py-3">person_id, project_id</td>
                    <td className="px-4 py-3">Maps people to specific projects they work on</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-white">users</td>
                    <td className="px-4 py-3">id, email, role (admin, viewer)</td>
                    <td className="px-4 py-3">Lists people allowed to sign into the dashboard</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm">
              By splitting profiles (<code>persons</code>) from their start/end dates (<code>memberships</code>),
              I can keep contact details clean. If a student graduates, I change their type to <code>ALUMNI</code>
              and set their end date, without losing their history or project connections.
            </p>
          </section>

          {/* FastAPI Backend Layer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">FastAPI Backend API</h2>
            <p>
              I built the backend API using Python and <strong>FastAPI</strong>. It is simple, fast, and
              gives auto-generated documentation endpoints out of the box.
            </p>
            <p>
              When a user signs in on the website, Next.js checks their credentials by sending a request
              to this backend endpoint to verify if their email exists in the user database table:
            </p>

            <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-xs overflow-x-auto text-amber-200">
              <span className="text-neutral-500"># Verify user email endpoint</span><br />
              <span className="text-purple-400">@app.get</span>(<span className="text-emerald-400">"/users/verify"</span>)<br />
              <span className="text-purple-400">def</span> <span className="text-blue-400">verify_user</span>(email: <span className="text-green-400">str</span>, db: Session = <span className="text-blue-400">Depends</span>(get_db)):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;user = db.query(User).filter(User.email == email).first()<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if not</span> user:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">raise</span> <span className="text-blue-400">HTTPException</span>(status_code=<span className="text-red-400">404</span>, detail=<span className="text-emerald-400">"User email not authorized"</span>)<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> &#123;<span className="text-emerald-400">"email"</span>: user.email, <span className="text-emerald-400">"role"</span>: user.role&#125;
            </div>
          </section>

          {/* Next.js Web Dashboard */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Next.js Web Portal & Google Login</h2>
            <p>
              The web app is the center of my project. The reason i choose Next.js is for its fast response and SSR
              which drastically improvd speed and providing a good user experience.
            </p>
            <p>
              I used <strong>NextAuth.js</strong> to set up Google login. When someone signs in with their
              Google account, Next.js calls the FastAPI backend behind the scenes to verify if their email
              is listed in the <code>users</code> database table. If they are in the database, they get a
              token containing their role (either <code>admin</code> or <code>viewer</code>). If not,
              they are immediately signed out and shown an access denied message.
            </p>
          </section>

          {/* Discord Bot Layer (De-emphasized) */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Experimental Discord Bot Trial</h2>
            <p>
              Earlier in the project, I tried building a Discord bot in Python using <code>discord.py</code>.
              The idea was to let coordinators type slash commands in the server (like <code>/addperson</code>
              or <code>/getproject</code>) to update records directly.
            </p>
            <p>
              However, with just a few options built i found it s usage too riugh for a platform at this scale.
              with more user data discord would become too messy provided its limitation to add only 5 inputs whenever
              a user form has to be created. Personally making a portfolio in nNextjs earlier made me decide to use the same
              for this project too. This version seemed more easier to use and manage than a discord server and a bot.
            </p>
          </section>

          {/* Security & Sensitivity */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Security & Privacy</h2>
            <p>
              Although i really wanted to give a deployment URL here, Since the app stores real club data, Im afraid
              (or rather not risk) exposing user data to the public. The frontend has been locked for the puclic and is now
              available only to the club members.
            </p>
          </section>

          {/* Challenges & Issues Faced */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">Challenges & Issues Faced</h2>
            <p>
              Since this was my first time working through a complete full-stack deployment like this,
              I ran into quite a few roadblocks along the way:
            </p>
            <ul className="list-disc list-inside space-y-3 pl-4">
              <li>
                <strong>The &quot;Works on My Machine&quot; Trap:</strong>During development stage I had hardcoded most of the env links to the specific file.
                I never knew that a .env file would be so important. I learned the hardway of missing some urls and taking valuable timing finding this error.(Thsi wont be repeated again :D)
              </li>
              <li>
                <strong>Supabase & Connection Errors:</strong> Migrating the database from a local PostgreSQL
                setup to Supabase in the cloud came with a learning curve. I hit connection errors because
                of IPv6 transaction pooler endpoints and typos in database connection strings on Render.
              </li>
              <li>
                <strong>CORS Policies & Environment Variables:</strong> When I deployed the frontend to Vercel and
                the backend to Render, they couldn't talk to each other. I had to learn how CORS headers work to allow
                requests between the domains, and ensure Vercel was pointing to the production Render URL instead of
                <code>localhost:8000</code>. Me and Gemini spend almost half an hour until i realised the local address alone added to the CORS.
              </li>
              <li>
                <strong>OAuth & NextAuth Misconfigurations:</strong> Configuring Google OAuth for the first time
                meant dealing with redirect URI mismatch errors. Getting the authentication flow to correctly query
                the database and fetch the whitelisted emails took some troubleshooting.
              </li>
            </ul>
          </section>

          {/* Conclusion */}
          <section className="space-y-4 pt-4 border-t border-neutral-800">
            <h2 className="text-2xl font-bold text-white tracking-tight">What I Learned</h2>
            <p>
              Building VeloWiKi was a great exercise in full-stack development. By setting up a robust,
              well-structured PostgreSQL database and a fast backend api, I was able to build a secure,
              responsive dashboard that handles the club's records cleanly. Keeping the focus on the Next.js
              web application allowed me to polish features and keep the interface simple and easy for everyone to use.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}
