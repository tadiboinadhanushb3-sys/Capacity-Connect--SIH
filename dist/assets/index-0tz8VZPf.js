(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`app`),t={"trainee@capacityconnect.demo":{role:`Trainee`,password:`trainee123`,name:`Alex Kumar`,avatar:`AK`,cohort:`ML Cohort 3`},"trainer@capacityconnect.demo":{role:`Trainer`,password:`trainer123`,name:`Dr. Priya Sharma`,avatar:`PS`,cohort:`AI Faculty`},"admin@capacityconnect.demo":{role:`Admin`,password:`admin123`,name:`Aarav Mehta`,avatar:`AM`,cohort:`Platform Admin`}},n=[{id:`ml-fundamentals`,title:`Machine Learning Fundamentals`,progress:68,instructor:`Dr. Priya Sharma`,duration:`6 weeks`,modules:[`Introduction`,`Types of Learning`,`Data Preparation`,`Model Building`,`Evaluation`,`Practical Project`,`Assessment`],completed:[0,1,2,3],notes:`Focus on supervised learning, feature engineering, and model validation.`,resources:[`Slides.pdf`,`Project Brief.pdf`,`Dataset.csv`]}],r=[{question:`Which technique is used to reduce overfitting in machine learning models?`,options:[`Regularization`,`Data duplication`,`Feature removal`,`Random guessing`],correct:0},{question:`What does supervised learning require?`,options:[`Labeled data`,`No labels`,`A GPU only`,`A website`],correct:0},{question:`Which metric is commonly used to evaluate classification models?`,options:[`Accuracy`,`File size`,`Color depth`,`Image brightness`],correct:0},{question:`Feature engineering primarily helps with:`,options:[`Preparing meaningful inputs`,`Deleting all files`,`Encrypting the browser`,`Playing a video`],correct:0}],i={explain:`Supervised learning is a type of machine learning where the model learns from labeled examples. It maps input features to known target outputs, making it useful for tasks like forecasting, classification, and recommendation.`,practice:`Practice Questions:
1. What is the difference between supervised and unsupervised learning?
2. Why is feature scaling important in ML pipelines?
3. How would you evaluate a model that predicts customer churn?`,summarize:`Summary: Start with a clear objective, understand the dataset, clean and prepare features, train a baseline model, validate performance, and iterate with better algorithms or tuning.`,next:`Next steps: Review the training data quality, build a baseline model, evaluate accuracy, tune hyperparameters, and complete the project-based assessment. `},a={page:`loading`,role:`Trainee`,user:null,activeCourse:n[0],activeModule:0,assessmentIndex:0,selectedAnswers:{},assessmentSubmitted:!1,score:0,timer:450,timerId:null,chatMessages:[{role:`ai`,text:`Hi! I am ASTRA. Ask me about learning pathways, concepts, or assessments.`}],notifications:[`Your assessment result is available.`,`New course recommendation for you.`,`Trainer updated the course schedule.`,`Certificate issued successfully.`],userList:[{name:`Alex Kumar`,email:`alex@capacityconnect.demo`,role:`Trainee`},{name:`Riya Nair`,email:`riya@capacityconnect.demo`,role:`Trainee`},{name:`Dr. Priya Sharma`,email:`priya@capacityconnect.demo`,role:`Trainer`},{name:`Rahul Mehta`,email:`rahul@capacityconnect.demo`,role:`Trainer`},{name:`Aarav Mehta`,email:`aarav@capacityconnect.demo`,role:`Admin`}],createdCourses:[`AI for Public Sector`,`Digital Skills Bootcamp`],questionnaires:[{title:`AI Readiness Survey`,deadline:`12 Oct 2026`},{title:`Training Feedback Form`,deadline:`22 Oct 2026`}],lastAnnouncement:`New learner onboarding workshop scheduled for Friday afternoon.`};function o(e){a.page=e,P()}function s(e){let t=Math.floor(e/60),n=e%60;return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}function c(e,t){let n=document.getElementById(`auth-alert`);n&&(n.className=`alert ${e} show`,n.textContent=t)}function l(e){let n=t[e];if(!n){c(`error`,`Demo account not found. Use the sample accounts shown below.`);return}a.user=n,a.role=n.role,o(u(n.role))}function u(e){return e===`Trainee`?`trainee-dashboard`:e===`Trainer`?`trainer-dashboard`:`admin-dashboard`}function d(){let e=a.activeCourse;e.completed=e.modules.map((e,t)=>t),e.progress=100,a.notifications.unshift(`Course completion recorded: Machine Learning Fundamentals.`),P()}function f(){a.activeModule=(a.activeModule+1)%a.activeCourse.modules.length,P()}function p(){a.assessmentIndex=0,a.selectedAnswers={},a.score=0,a.assessmentSubmitted=!1,a.timer=450,clearInterval(a.timerId),a.timerId=setInterval(()=>{a.timer=Math.max(0,a.timer-1),P(),a.timer===0&&(clearInterval(a.timerId),m())},1e3),o(`assessment`)}function m(){clearInterval(a.timerId);let e=a.selectedAnswers,t=0;r.forEach((n,r)=>{e[r]===n.correct&&(t+=1)}),a.assessmentSubmitted=!0,a.score=t*25,a.notifications.unshift(`Your assessment result is available.`),P()}function h(e,t){a.selectedAnswers[e]=t,P()}function g(e){let t=(e||``).trim();if(!t)return;a.chatMessages.push({role:`user`,text:t});let n=`I can help you map your learning path. Ask me about concepts, practice questions, or next steps.`,r=t.toLowerCase();r.includes(`supervised`)||r.includes(`explain`)?n=i.explain:r.includes(`practice`)||r.includes(`question`)?n=i.practice:r.includes(`summarize`)||r.includes(`summary`)?n=i.summarize:r.includes(`next`)||r.includes(`path`)||r.includes(`suggest`)?n=i.next:(r.includes(`project`)||r.includes(`assessment`))&&(n=`Your next best move is to finish Module 6, revise the evaluation concepts, and take the ML assessment before the deadline.`),a.chatMessages.push({role:`ai`,text:n}),P()}function _(e){return e>=80?`Excellent work — you are ready for the next advanced module.`:e>=60?`Good progress — a quick revision of the concepts will strengthen your understanding.`:`Keep going — revisit the module notes and attempt the assessment again.`}function v(){return`
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-inner">
          <div class="brand">
            <div class="brand-mark">🎓</div>
            <div class="brand-name">CAPACITY CONNECT</div>
          </div>
          <nav class="top-nav">
            <a class="nav-link" href="#what">What is it</a>
            <a class="nav-link" href="#features">Features</a>
            <a class="nav-link" href="#roles">Roles</a>
            <a class="nav-link" href="#astra">ASTRA</a>
            <a class="nav-link" href="#impact">Impact</a>
          </nav>
          <div class="btn-group">
            <button class="btn secondary" data-action="auth-login">Log in</button>
            <button class="btn" data-action="auth-signup">Get Started</button>
          </div>
        </div>
      </header>

      <main class="page">
        <section class="hero">
          <div>
            <div class="kicker">Digital Capacity Building</div>
            <h1>Build Skills. Connect Expertise. Grow Together.</h1>
            <p>A centralized digital platform for structured learning, assessments, competency mapping and continuous capacity building.</p>
            <div class="hero-actions">
              <button class="btn" data-action="auth-login">Get Started</button>
              <button class="btn secondary" data-action="explore-platform">Explore Platform</button>
            </div>
          </div>
          <div class="hero-preview">
            <div class="preview-card">
              <div class="preview-header">
                <strong>Learning Overview</strong>
                <span class="status">Live</span>
              </div>
              <div class="widget-grid">
                <div class="mini-stat">
                  <div class="label">Enrolled</div>
                  <div class="value">1,284</div>
                </div>
                <div class="mini-stat">
                  <div class="label">Assessments</div>
                  <div class="value">96%</div>
                </div>
                <div class="mini-stat">
                  <div class="label">AI Guidance</div>
                  <div class="value">24/7</div>
                </div>
                <div class="mini-stat">
                  <div class="label">Mentors</div>
                  <div class="value">148</div>
                </div>
              </div>
              <div class="progress-slab">
                <div class="progress-row"><span>Course completion</span><span>78%</span></div>
                <div class="progress-bar"><span></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="what" class="section">
          <div class="section-header">
            <h2>What is Capacity Connect?</h2>
          </div>
          <div class="grid-2">
            <div class="info-card" style="padding: 24px;">
              <p style="margin:0; line-height:1.8; color:var(--muted);">Capacity Connect is a digital ecosystem designed for institutions, trainers, and learners to build skills continuously through structured training, mentoring, evaluation, and real-time competency analysis. It bridges the gap between learning and practical capability development for modern workforce readiness.</p>
            </div>
            <div class="info-card" style="padding: 24px;">
              <p style="margin:0; line-height:1.8; color:var(--muted);">It brings together capacity building, skilled mentoring, assessment workflows, and AI-supported guidance in one place so organizations can track skills, identify gaps, connect with experts, and certify growth.</p>
            </div>
          </div>
        </section>

        <section class="section" id="features">
          <div class="section-header">
            <h2>Why Capacity Connect?</h2>
          </div>
          <div class="grid-4">
            <div class="feature-card">
              <div class="feature-icon">📚</div>
              <h3>Structured Learning</h3>
              <p>Clear pathways with courses, modules, scheduling, and progress visibility.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🧪</div>
              <h3>Assessments</h3>
              <p>Robust assessment engine with timer, scoring and actionable performance feedback.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🧭</div>
              <h3>Competency Mapping</h3>
              <p>Detect skill gaps and align people with the right mentors and learning tracks.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🤝</div>
              <h3>Trainer Matching</h3>
              <p>Connect talent with domain experts using subject-specific competency profiles.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🏅</div>
              <h3>Certifications</h3>
              <p>Issue completion credentials and showcase verified skill achievements.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">📊</div>
              <h3>Analytics</h3>
              <p>Track performance trends, completion, learner activity and trainer reports.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🔔</div>
              <h3>Notifications</h3>
              <p>Keep all participants informed about deadlines, updates, and progress.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">✨</div>
              <h3>ASTRA AI Assistant</h3>
              <p>Support learners with explanations, practice questions, and next-step guidance.</p>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <h2>How It Works</h2>
          </div>
          <div class="workflow">
            <div class="workflow-step">Learn</div>
            <div class="workflow-arrow">↓</div>
            <div class="workflow-step">Assess</div>
            <div class="workflow-arrow">↓</div>
            <div class="workflow-step">Identify Skills</div>
            <div class="workflow-arrow">↓</div>
            <div class="workflow-step">Connect with Expertise</div>
            <div class="workflow-arrow">↓</div>
            <div class="workflow-step">Certify</div>
            <div class="workflow-arrow">↓</div>
            <div class="workflow-step">Grow</div>
          </div>
        </section>

        <section id="roles" class="section">
          <div class="section-header">
            <h2>Three User Roles</h2>
          </div>
          <div class="role-grid">
            <div class="role-card">
              <div class="role-emoji">🎯</div>
              <h3>Trainee</h3>
              <p>Access guided learning, assessments, progress dashboards, and personalized AI support.</p>
            </div>
            <div class="role-card">
              <div class="role-emoji">👩‍🏫</div>
              <h3>Trainer</h3>
              <p>Create content, manage learners, run assessments, and monitor performance in real time.</p>
            </div>
            <div class="role-card">
              <div class="role-emoji">🛠️</div>
              <h3>Admin</h3>
              <p>Govern users, approve trainers, manage courses, and monitor institutional outcomes.</p>
            </div>
          </div>
        </section>

        <section id="astra" class="section">
          <div class="section-header">
            <h2>ASTRA AI Learning Copilot</h2>
          </div>
          <div class="panel">
            <p style="margin:0 0 14px; color:var(--muted);">ASTRA helps learners with explanations, practice questions, resource summaries and personalized next-step recommendations.</p>
            <div class="chat-message ai">
              “Supervised learning is a type of machine learning where the model learns from labelled examples and maps inputs to known outputs.”
            </div>
          </div>
        </section>

        <section id="impact" class="section">
          <div class="section-header">
            <h2>Impact & Benefits</h2>
          </div>
          <div class="grid-3">
            <div class="feature-card">
              <h3>Higher Completion</h3>
              <p>Guided learning journeys improve learner retention and course completion rates.</p>
            </div>
            <div class="feature-card">
              <h3>Skill Visibility</h3>
              <p>Competency mapping surfaces growth areas and connects talent with expertise.</p>
            </div>
            <div class="feature-card">
              <h3>Faster Scaling</h3>
              <p>Administrators can deploy structured programs across teams and monitor outcomes.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  `}function y(){return`
    <div class="page">
      <div class="auth-layout">
        <div class="auth-panel auth-visual">
          <div class="visual-inner">
            <div class="brand" style="margin-bottom: 18px;">
              <div class="brand-mark">🎓</div>
              <div class="brand-name">CAPACITY CONNECT</div>
            </div>
            <div class="demo-box">
              <strong>Demo Access</strong>
              <div style="margin-top: 8px; color: var(--muted);">Use sample demo accounts to experience each role.</div>
            </div>
            <div class="demo-login-list">
              ${Object.entries(t).map(([e,t])=>`
                <div class="demo-user">
                  <div>
                    <strong>${t.role}</strong>
                    <span style="font-size: 0.78rem; color: var(--muted);">${e}</span>
                  </div>
                  <button class="small-btn" data-demo-email="${e}">Login</button>
                </div>
              `).join(``)}
            </div>
            <div class="demo-box" style="margin-top: 18px;">
              <strong>Platform promise</strong>
              <div style="margin-top: 8px; color: var(--muted); line-height:1.7;">Structured learning, evidence-based uplift, advisor support, and capacity transformation for every learner.</div>
            </div>
          </div>
        </div>

        <div class="auth-panel auth-form">
          <div class="kicker">Welcome Back</div>
          <h2>Sign in to your account</h2>
          <form id="loginForm" onsubmit="handleLogin(event)">
            <div class="form-row">
              <div class="form-field">
                <label for="login-email">Work email</label>
                <input id="login-email" name="email" type="email" placeholder="you@capacityconnect.demo" />
              </div>
              <div class="form-field">
                <label for="login-password">Password</label>
                <input id="login-password" name="password" type="password" placeholder="Enter your password" />
              </div>
            </div>
            <div class="inline-actions" style="margin-top: 16px;">
              <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" /> Remember me</label>
              <span class="linkish" data-action="auth-forgot">Forgot password?</span>
            </div>
            <button class="btn" style="width: 100%; margin-top: 20px;" type="submit">Login</button>
            <div id="auth-alert" class="alert"></div>
          </form>

          <div style="display:flex; align-items:center; gap:10px; margin: 24px 0 16px;">
            <span style="flex:1; height:1px; background: var(--line);"></span>
            <span style="color: var(--muted); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em;">Or</span>
            <span style="flex:1; height:1px; background: var(--line);"></span>
          </div>

          <button class="btn secondary" style="width:100%;" data-action="auth-signup">Create an account</button>
          <div style="margin-top: 18px; text-align: center; color: var(--muted);">
            Need a role switch? <span class="linkish" data-action="auth-role">Choose a role</span>
          </div>
        </div>
      </div>
    </div>
  `}function b(){return`
    <div class="page">
      <div class="auth-layout">
        <div class="auth-panel auth-visual">
          <div class="visual-inner">
            <div class="brand" style="margin-bottom: 20px;">
              <div class="brand-mark">🚀</div>
              <div class="brand-name">Join Capacity Connect</div>
            </div>
            <div class="demo-box">
              <strong>Why join?</strong>
              <ul style="margin: 12px 0 0; padding-left: 18px; color: var(--muted); line-height:1.8;">
                <li>Track your growth in one place</li>
                <li>Understand skill gaps</li>
                <li>Access AI guidance and mentors</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="auth-panel auth-form">
          <div class="kicker">Create account</div>
          <h2>Sign up</h2>
          <form id="signupForm" onsubmit="handleSignup(event)">
            <div class="form-row">
              <div class="form-field">
                <label>Full name</label>
                <input type="text" name="name" placeholder="Your full name" />
              </div>
              <div class="form-field">
                <label>Work email</label>
                <input type="email" name="email" placeholder="you@company.com" />
              </div>
              <div class="form-field">
                <label>Select role</label>
                <select name="role">
                  <option value="Trainee">Trainee</option>
                  <option value="Trainer">Trainer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <button class="btn" style="width: 100%; margin-top: 20px;" type="submit">Create account</button>
            <div id="auth-alert" class="alert"></div>
          </form>
          <div style="margin-top: 20px; text-align:center; color: var(--muted);">Already have an account? <span class="linkish" data-action="auth-login">Log in here</span></div>
        </div>
      </div>
    </div>
  `}function x(){return`
    <div class="page">
      <div class="auth-layout" style="grid-template-columns: 1fr 1.1fr;">
        <div class="auth-panel auth-visual">
          <div class="visual-inner">
            <div class="brand" style="margin-bottom: 18px;">
              <div class="brand-mark">🔐</div>
              <div class="brand-name">Reset access</div>
            </div>
            <div class="demo-box">
              <strong>Need help?</strong>
              <div style="margin-top: 8px; color: var(--muted);">Use a demo account to verify your email recovery flow quickly in the SIH demo.</div>
            </div>
          </div>
        </div>
        <div class="auth-panel auth-form">
          <div class="kicker">Forgot password</div>
          <h2>Reset your password</h2>
          <form id="forgotForm" onsubmit="handleForgotPassword(event)">
            <div class="form-field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" />
            </div>
            <button class="btn" style="width: 100%; margin-top: 16px;" type="submit">Send reset link</button>
            <div id="auth-alert" class="alert"></div>
          </form>
          <div style="margin-top: 20px; color: var(--muted); text-align: center;">Return to <span class="linkish" data-action="auth-login">Login</span></div>
        </div>
      </div>
    </div>
  `}function S(){return`
    <div class="page">
      <div class="section">
        <div class="section-header">
          <h2>Choose Your Role</h2>
        </div>
        <div class="role-grid">
          <div class="role-card">
            <div class="role-emoji">🎯</div>
            <h3>Trainee</h3>
            <p>Learn, complete courses, track progress, and get AI-guided recommendations.</p>
            <button class="btn" style="margin-top:16px;" data-role-select="Trainee">Continue as Trainee</button>
          </div>
          <div class="role-card">
            <div class="role-emoji">👩‍🏫</div>
            <h3>Trainer</h3>
            <p>Design assessments, publish resources, mentor learners and monitor outcomes.</p>
            <button class="btn secondary" style="margin-top:16px;" data-role-select="Trainer">Continue as Trainer</button>
          </div>
          <div class="role-card">
            <div class="role-emoji">🛠️</div>
            <h3>Admin</h3>
            <p>Manage roles, approve content, monitor adoption and monitor completion analytics.</p>
            <button class="btn ghost" style="margin-top:16px;" data-role-select="Admin">Continue as Admin</button>
          </div>
        </div>
      </div>
    </div>
  `}function C(){return`
    <div class="dashboard-shell">
      <aside class="sidebar">
        <div class="sidebar-title">CAPACITY CONNECT</div>
        <nav class="sidebar-nav">
          ${[`Dashboard`,`My Courses`,`Learning Resources`,`Assessments`,`My Progress`,`Certificates`,`Competencies`,`Astra AI`,`Notifications`,`Profile`,`Settings`].map((e,t)=>`
            <button class="nav-item ${t===0?`active`:``}" data-nav="${e.toLowerCase().replace(/\s+/g,`-`)}">
              ${e}
            </button>
          `).join(``)}
        </nav>
      </aside>
      <main class="main-panel">
        <div class="header-row">
          <h2>Welcome back, Alex</h2>
          <div class="btn-group">
            <button class="btn secondary" data-action="open-course">Open Course</button>
            <button class="btn" data-action="logout">Logout</button>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat-card">
            <div class="label">Enrolled Courses</div>
            <div class="value">06</div>
            <div class="trend">+2 this month</div>
          </div>
          <div class="stat-card">
            <div class="label">Completed</div>
            <div class="value">03</div>
            <div class="trend">+1 this week</div>
          </div>
          <div class="stat-card">
            <div class="label">Pending Assessments</div>
            <div class="value">02</div>
            <div class="trend">2 due soon</div>
          </div>
          <div class="stat-card">
            <div class="label">Certificates</div>
            <div class="value">02</div>
            <div class="trend">1 new</div>
          </div>
          <div class="stat-card">
            <div class="label">Overall Progress</div>
            <div class="value">76%</div>
            <div class="trend">+8% this month</div>
          </div>
        </div>

        <div class="content-grid">
          <div class="panel">
            <div class="list-header">
              <h3>Continue Learning</h3>
              <button class="small-btn" data-action="open-course">Resume</button>
            </div>
            <div class="course-list">
              <div class="course-item">
                <div>
                  <strong>Machine Learning Fundamentals</strong>
                  <div class="course-meta">Module 5 of 7 • Progress 68%</div>
                </div>
                <span class="badge">Live</span>
              </div>
              <div class="course-item">
                <div>
                  <strong>Data Analysis with Python</strong>
                  <div class="course-meta">Module 3 of 6 • Progress 52%</div>
                </div>
                <span class="badge">On track</span>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="list-header">
              <h3>Upcoming Assessments</h3>
              <button class="small-btn" data-action="take-assessment">Take now</button>
            </div>
            <div class="course-list">
              <div class="course-item">
                <div>
                  <strong>ML Fundamentals Assessment</strong>
                  <div class="course-meta">Due in 2 days</div>
                </div>
                <span class="badge">Open</span>
              </div>
              <div class="course-item">
                <div>
                  <strong>Data Storytelling Quiz</strong>
                  <div class="course-meta">Due in 5 days</div>
                </div>
                <span class="badge">New</span>
              </div>
            </div>
          </div>
        </div>

        <div class="content-grid" style="margin-top: 20px;">
          <div class="chart-panel">
            <div class="list-header">
              <h3>Learning Progress</h3>
              <span class="filter-pill">This quarter</span>
            </div>
            <div class="chart-bars">
              <div class="bar" data-label="Jan" style="height: 36%;"></div>
              <div class="bar" data-label="Feb" style="height: 48%;"></div>
              <div class="bar" data-label="Mar" style="height: 56%;"></div>
              <div class="bar" data-label="Apr" style="height: 66%;"></div>
              <div class="bar" data-label="May" style="height: 74%;"></div>
              <div class="bar" data-label="Jun" style="height: 82%;"></div>
            </div>
          </div>

          <div class="panel">
            <div class="list-header">
              <h3>Recent Activity</h3>
            </div>
            <div class="activity-list">
              <div class="activity-item"><span>Completed Introduction module</span><strong>Today</strong></div>
              <div class="activity-item"><span>Submitted AI project draft</span><strong>2 days ago</strong></div>
              <div class="activity-item"><span>Earned certificate: Python Basics</span><strong>4 days ago</strong></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `}function w(){let e=a.activeCourse,t=e.modules[a.activeModule],n=e.completed.length;return`
    <div class="page">
      <div class="header-row">
        <div>
          <div class="kicker">Course Learning</div>
          <h2>${e.title}</h2>
        </div>
        <div class="btn-group">
          <button class="btn secondary" data-action="dashboard-back">Back to dashboard</button>
          <button class="btn" data-action="take-assessment">Take Assessment</button>
        </div>
      </div>

      <div class="course-view">
        <aside class="module-panel">
          <div class="list-header"><h3>Course Modules</h3><span class="progress-bubble">${e.progress}%</span></div>
          <div class="module-list">
            ${e.modules.map((t,n)=>`
              <div class="module-item ${n===a.activeModule?`active`:``} ${e.completed.includes(n)?`completed`:``}" data-module-index="${n}">
                <div class="module-left">
                  <div class="module-index">${n+1}</div>
                  <div>
                    <strong>${t}</strong>
                  </div>
                </div>
                <span>${e.completed.includes(n)?`✓`:`▶`}</span>
              </div>
            `).join(``)}
          </div>
          <div style="margin-top: 18px; color: var(--muted);">${n}/${e.modules.length} modules completed</div>
        </aside>

        <section class="course-body">
          <div class="lesson-meta">
            <span>Instructor: ${e.instructor}</span>
            <span>•</span>
            <span>Course duration: ${e.duration}</span>
          </div>
          <h3>${t}</h3>
          <div class="video-box">▶ Video Lesson • ${t}</div>
          <div class="notes-box">
            <strong>Notes</strong>
            <p style="margin: 12px 0 0; color: var(--muted); line-height: 1.7;">${e.notes}</p>
          </div>
          <div class="content-actions">
            <button class="btn secondary" data-action="mark-complete">Mark as Complete</button>
            <button class="btn" data-action="next-lesson">Next Lesson</button>
          </div>
          <div class="notes-box">
            <strong>Download Resources</strong>
            <ul style="margin: 14px 0 0 18px; color: var(--muted); line-height: 1.8;">
              ${e.resources.map(e=>`<li>${e}</li>`).join(``)}
            </ul>
          </div>
        </section>
      </div>
    </div>
  `}function T(){let e=r[a.assessmentIndex],t=a.selectedAnswers[a.assessmentIndex];if(a.assessmentSubmitted){let e=r.length-Math.round(a.score/25),t=Math.round(a.score/25);return`
      <div class="page">
        <div class="quiz-shell">
          <div class="quiz-card">
            <div class="kicker">Assessment Submitted</div>
            <h2>Machine Learning Fundamentals Assessment</h2>
            <div class="stat-grid" style="margin-top: 18px;">
              <div class="stat-card"><div class="label">Score</div><div class="value">${a.score}/100</div></div>
              <div class="stat-card"><div class="label">Correct</div><div class="value">${t}</div></div>
              <div class="stat-card"><div class="label">Incorrect</div><div class="value">${e}</div></div>
              <div class="stat-card"><div class="label">Percentage</div><div class="value">${Math.round(a.score/100*100)}%</div></div>
            </div>
            <div class="course-item" style="margin-top: 18px; background: rgba(43,109,246,0.04); border-color: rgba(43,109,246,0.12);">
              <div>
                <strong>Performance Feedback</strong>
                <div class="course-meta" style="margin-top: 8px;">${_(a.score)}</div>
              </div>
              <span class="badge">Result</span>
            </div>
            <div class="quiz-actions" style="margin-top: 20px;">
              <button class="btn secondary" data-action="dashboard-back">Back to Dashboard</button>
              <button class="btn" data-action="view-certificate">View Certificate</button>
            </div>
          </div>
        </div>
      </div>
    `}return`
    <div class="page">
      <div class="quiz-shell">
        <div class="quiz-card">
          <div class="question-header">
            <div>
              <div class="kicker">Machine Learning Fundamentals Assessment</div>
              <h2>Question ${a.assessmentIndex+1} of ${r.length}</h2>
            </div>
            <div class="timer-box">⏱ ${s(a.timer)}</div>
          </div>
          <div class="progress-bubble" style="margin-bottom: 18px;">${Math.round((a.assessmentIndex+1)/r.length*100)}%</div>
          <h3>${e.question}</h3>
          <div class="options">
            ${e.options.map((e,n)=>`
              <button class="option ${t===n?`selected`:``}" data-answer-index="${n}" type="button">${String.fromCharCode(65+n)}. ${e}</button>
            `).join(``)}
          </div>
          <div class="quiz-actions">
            <button class="btn secondary" ${a.assessmentIndex===0?`disabled`:``} data-action="prev-question">Previous</button>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
              <button class="btn ghost" data-action="submit-assessment">Submit Assessment</button>
              <button class="btn" data-action="next-question">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function E(){return`
    <div class="dashboard-shell">
      <aside class="sidebar">
        <div class="sidebar-title">Trainer Hub</div>
        <nav class="sidebar-nav">
          ${[`Dashboard`,`My Courses`,`Questionnaires`,`Students`,`Batches`,`Learning Resources`,`Performance`,`Notifications`,`Profile`,`Settings`].map((e,t)=>`
            <button class="nav-item ${t===0?`active`:``}" data-nav="${e.toLowerCase().replace(/\s+/g,`-`)}">${e}</button>
          `).join(``)}
        </nav>
      </aside>
      <main class="main-panel">
        <div class="header-row">
          <h2>Trainer Dashboard</h2>
          <div class="btn-group">
            <button class="btn" data-action="logout">Logout</button>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat-card"><div class="label">Total Learners</div><div class="value">342</div><div class="trend">+28 this month</div></div>
          <div class="stat-card"><div class="label">Active Batches</div><div class="value">07</div><div class="trend">94% active</div></div>
          <div class="stat-card"><div class="label">Courses</div><div class="value">12</div><div class="trend">3 new</div></div>
          <div class="stat-card"><div class="label">Pending Assessments</div><div class="value">08</div><div class="trend">3 by Friday</div></div>
          <div class="stat-card"><div class="label">Participation Rate</div><div class="value">89%</div><div class="trend">+6% uptick</div></div>
        </div>

        <div class="content-grid">
          <div class="panel">
            <div class="list-header"><h3>Create Course</h3></div>
            <form onsubmit="addCourse(event)">
              <div class="form-row">
                <div class="form-field"><label>Course title</label><input name="title" placeholder="New course title" /></div>
                <div class="form-field"><label>Category</label><select name="category"><option>AI</option><option>Data Science</option><option>Digital Skills</option></select></div>
              </div>
              <button class="btn" style="margin-top: 16px;" type="submit">Publish course</button>
            </form>
            <div class="course-list" style="margin-top:18px;">
              ${a.createdCourses.map(e=>`
                <div class="course-item"><div><strong>${e}</strong><div class="course-meta">Ready for enrolment</div></div><span class="badge">Published</span></div>
              `).join(``)}
            </div>
          </div>

          <div class="panel">
            <div class="list-header"><h3>Announcements</h3></div>
            <div class="course-item">
              <div>
                <strong>Latest update</strong>
                <div class="course-meta">${a.lastAnnouncement}</div>
              </div>
              <span class="badge">Live</span>
            </div>
            <div style="margin-top: 18px;">
              <form onsubmit="event.preventDefault(); state.lastAnnouncement = document.getElementById('announcement').value || state.lastAnnouncement; render();">
                <div class="form-field"><textarea id="announcement" rows="3" placeholder="Send an announcement to learners..."></textarea></div>
                <button class="btn" type="submit" style="margin-top:12px;">Send announcement</button>
              </form>
            </div>
          </div>
        </div>

        <div class="content-grid" style="margin-top: 20px;">
          <div class="chart-panel">
            <div class="list-header"><h3>Course Performance</h3><span class="filter-pill">Avg. 82%</span></div>
            <div class="chart-bars">
              <div class="bar" data-label="AI" style="height: 64%;"></div>
              <div class="bar" data-label="ML" style="height: 78%;"></div>
              <div class="bar" data-label="DS" style="height: 71%;"></div>
              <div class="bar" data-label="Web" style="height: 88%;"></div>
              <div class="bar" data-label="Cloud" style="height: 69%;"></div>
            </div>
          </div>

          <div class="panel">
            <div class="list-header"><h3>Questionnaires</h3></div>
            <form onsubmit="addQuestionnaire(event)">
              <div class="form-field"><label>Questionnaire</label><input name="qtitle" placeholder="New questionnaire title" /></div>
              <div class="form-field" style="margin-top: 12px;"><label>Deadline</label><input type="date" name="deadline" /></div>
              <button class="btn" style="margin-top: 12px;" type="submit">Create questionnaire</button>
            </form>
            <div class="course-list" style="margin-top: 18px;">
              ${a.questionnaires.map(e=>`
                <div class="course-item"><div><strong>${e.title}</strong><div class="course-meta">Deadline: ${e.deadline}</div></div><span class="badge">Active</span></div>
              `).join(``)}
            </div>
          </div>
        </div>
      </main>
    </div>
  `}function D(){return`
    <div class="dashboard-shell">
      <aside class="sidebar">
        <div class="sidebar-title">Admin Command Center</div>
        <nav class="sidebar-nav">
          ${[`Dashboard`,`Users`,`Roles`,`Courses`,`Enrolments`,`Assessments`,`Certifications`,`Competencies`,`Reports`,`Settings`].map((e,t)=>`
            <button class="nav-item ${t===0?`active`:``}" data-nav="${e.toLowerCase().replace(/\s+/g,`-`)}">${e}</button>
          `).join(``)}
        </nav>
      </aside>
      <main class="main-panel">
        <div class="header-row">
          <h2>Admin Dashboard</h2>
          <div class="btn-group">
            <button class="btn" data-action="logout">Logout</button>
          </div>
        </div>

        <div class="stat-grid">
          <div class="stat-card"><div class="label">Total Users</div><div class="value">1,780</div><div class="trend">+84 this week</div></div>
          <div class="stat-card"><div class="label">Trainees</div><div class="value">1,246</div><div class="trend">+42</div></div>
          <div class="stat-card"><div class="label">Trainers</div><div class="value">184</div><div class="trend">+11</div></div>
          <div class="stat-card"><div class="label">Courses</div><div class="value">73</div><div class="trend">+8</div></div>
          <div class="stat-card"><div class="label">Enrolments</div><div class="value">3,412</div><div class="trend">+201</div></div>
        </div>

        <div class="content-grid">
          <div class="panel">
            <div class="list-header"><h3>Users</h3><span class="filter-pill">Manage</span></div>
            <form onsubmit="addUser(event)">
              <div class="form-row">
                <div class="form-field"><label>Name</label><input name="name" placeholder="Full name" /></div>
                <div class="form-field"><label>Email</label><input name="email" type="email" placeholder="name@domain.com" /></div>
                <div class="form-field"><label>Role</label><select name="role"><option>Trainee</option><option>Trainer</option><option>Admin</option></select></div>
              </div>
              <button type="submit" class="btn" style="margin-top: 12px;">Add user</button>
            </form>
            <div class="table-wrap" style="margin-top: 18px;">
              <table class="data-table">
                <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
                <tbody>
                  ${a.userList.map(e=>`
                    <tr><td>${e.name}</td><td>${e.role}</td><td><span class="badge">Active</span></td></tr>
                  `).join(``)}
                </tbody>
              </table>
            </div>
          </div>

          <div class="chart-panel">
            <div class="list-header"><h3>Course Enrolments</h3></div>
            <div class="chart-bars">
              <div class="bar" data-label="ML" style="height: 62%;"></div>
              <div class="bar" data-label="AI" style="height: 74%;"></div>
              <div class="bar" data-label="DS" style="height: 71%;"></div>
              <div class="bar" data-label="Web" style="height: 90%;"></div>
              <div class="bar" data-label="Cloud" style="height: 68%;"></div>
            </div>
          </div>
        </div>

        <div class="content-grid" style="margin-top: 20px;">
          <div class="panel">
            <div class="list-header"><h3>Reports</h3></div>
            <div class="report-list">
              <div class="report-item"><strong>Completion rate</strong><span class="badge">78%</span></div>
              <div class="report-item"><strong>Assessment pass rate</strong><span class="badge">81%</span></div>
              <div class="report-item"><strong>Trainer approval requests</strong><span class="badge">09</span></div>
            </div>
          </div>

          <div class="panel">
            <div class="list-header"><h3>Admin Controls</h3></div>
            <div class="course-list">
              <div class="course-item"><span>Approve trainers</span><span class="badge">Pending</span></div>
              <div class="course-item"><span>Manage course catalog</span><span class="badge">Live</span></div>
              <div class="course-item"><span>Monitor assessments</span><span class="badge">Healthy</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `}function O(){return`
    <div class="page">
      <div class="header-row">
        <div>
          <div class="kicker">Competency Mapping</div>
          <h2>Skills & Trainer Alignment</h2>
        </div>
        <button class="btn" data-action="find-trainer">Find Suitable Trainer</button>
      </div>
      <div class="grid-3">
        <div class="feature-card">
          <h3>Python</h3>
          <p>Skill level: Strong</p>
          <div class="course-meta">Trainer: Neha Singh • 4 years expertise</div>
        </div>
        <div class="feature-card">
          <h3>Machine Learning</h3>
          <p>Recommended focus: Medium</p>
          <div class="course-meta">Trainer: Dr. Priya Sharma • 5 years expertise</div>
        </div>
        <div class="feature-card">
          <h3>Data Analysis</h3>
          <p>Competency gap: High</p>
          <div class="course-meta">Trainer: Rahul Mehta • 4 years expertise</div>
        </div>
        <div class="feature-card">
          <h3>Web Development</h3>
          <p>Associated support: Strong</p>
          <div class="course-meta">Trainer: Shruti Rao • 6 years expertise</div>
        </div>
        <div class="feature-card">
          <h3>Cloud Computing</h3>
          <p>Competency gap: Medium</p>
          <div class="course-meta">Trainer: Karthik Iyer • 5 years expertise</div>
        </div>
        <div class="feature-card">
          <h3>AI Strategy</h3>
          <p>Skill level: Moderate</p>
          <div class="course-meta">Trainer: Aisha Khan • 8 years expertise</div>
        </div>
      </div>
      <div class="panel" style="margin-top: 24px;">
        <div class="list-header"><h3>Competency Gaps</h3></div>
        <div class="course-list">
          <div class="course-item"><span>Low</span><span class="badge">Python, Web</span></div>
          <div class="course-item"><span>Medium</span><span class="badge">Cloud, AI Strategy</span></div>
          <div class="course-item"><span>High</span><span class="badge">Data Analysis, Machine Learning</span></div>
        </div>
      </div>
    </div>
  `}function k(){return`
    <div class="page">
      <div class="header-row">
        <div>
          <div class="kicker">ASTRA</div>
          <h2>Your Personal AI Learning Copilot</h2>
        </div>
      </div>
      <div class="chat-box">
        <aside class="chat-sidebar">
          <strong>Ask ASTRA</strong>
          <div class="prompt-chips">
            <button class="chip" data-ask="Explain supervised learning in simple terms">Explain this</button>
            <button class="chip" data-ask="Generate practice questions for machine learning">Generate Practice Questions</button>
            <button class="chip" data-ask="Summarize key machine learning concepts">Summarize</button>
            <button class="chip" data-ask="Suggest next steps for my learning path">Suggest Next Steps</button>
          </div>
          <div class="demo-box" style="margin-top: 20px;">
            <strong>Available actions</strong>
            <ul style="margin: 10px 0 0; padding-left: 18px; color: var(--muted); line-height:1.7;">
              <li>Explain concepts</li>
              <li>Generate practice questions</li>
              <li>Summarize resources</li>
              <li>Recommend next steps</li>
            </ul>
          </div>
        </aside>
        <div class="chat-main">
          <div class="chat-list">
            ${a.chatMessages.map(e=>`
              <div class="chat-message ${e.role===`user`?`user`:`ai`}">
                <strong>${e.role===`user`?`You`:`ASTRA`}</strong><br />${e.text}
              </div>
            `).join(``)}
          </div>
          <div class="chat-input-row">
            <input id="astraInput" placeholder="Ask ASTRA a question about learning or skill development..." />
            <button class="btn" data-action="send-astra">Send</button>
          </div>
        </div>
      </div>
    </div>
  `}function A(){return`
    <div class="page">
      <div class="header-row">
        <div>
          <div class="kicker">Certificate</div>
          <h2>Certificate of Completion</h2>
        </div>
        <button class="btn" data-action="download-certificate">Download Certificate</button>
      </div>
      <div class="certificate-card">
        <div class="logo-badge"><span class="brand-mark" style="width:32px;height:32px;font-size:1rem;">🎓</span> CAPACITY CONNECT</div>
        <div class="certificate-title">Certificate of Completion</div>
        <div class="certificate-body">
          This certificate is awarded to <strong>Alex Kumar</strong><br />
          for successfully completing<br />
          <strong>Machine Learning Fundamentals.</strong>
        </div>
        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 24px; text-align:left; color: var(--muted);">
          <div><strong>Certificate ID:</strong><br />CC-ML-2026-1048</div>
          <div><strong>Date:</strong><br />24 Sep 2026</div>
          <div><strong>Course:</strong><br />Machine Learning Fundamentals</div>
          <div><strong>Trainer:</strong><br />Dr. Priya Sharma</div>
        </div>
      </div>
    </div>
  `}function j(){return`
    <div class="page">
      <div class="header-row">
        <h2>Notifications</h2>
      </div>
      <div class="notification-center">
        ${a.notifications.map(e=>`
          <div class="notification-item">
            <span class="dot"></span>
            <div style="flex:1;">
              <strong>${e}</strong>
              <div class="course-meta" style="margin-top: 6px;">Just now</div>
            </div>
            <button class="small-btn">Open</button>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function M(){return`
    <div class="page">
      <div class="header-row">
        <h2>Analytics & Reports</h2>
      </div>
      <div class="grid-3">
        <div class="stat-card"><div class="label">Learner Progress</div><div class="value">76%</div><div class="trend">+8% in 30 days</div></div>
        <div class="stat-card"><div class="label">Course Completion</div><div class="value">81%</div><div class="trend">+5% vs last month</div></div>
        <div class="stat-card"><div class="label">Assessment Scores</div><div class="value">88%</div><div class="trend">Top performing cohort</div></div>
      </div>

      <div class="content-grid" style="margin-top: 22px;">
        <div class="chart-panel">
          <div class="list-header"><h3>Most Popular Courses</h3></div>
          <div class="chart-bars">
            <div class="bar" data-label="ML" style="height: 76%;"></div>
            <div class="bar" data-label="AI" style="height: 85%;"></div>
            <div class="bar" data-label="DS" style="height: 69%;"></div>
            <div class="bar" data-label="Web" style="height: 90%;"></div>
          </div>
        </div>

        <div class="panel">
          <div class="list-header"><h3>Trainer Performance</h3></div>
          <div class="list-card">
            <div class="report-item"><strong>Dr. Priya Sharma</strong><span class="badge">92%</span></div>
            <div class="report-item"><strong>Rahul Mehta</strong><span class="badge">88%</span></div>
            <div class="report-item"><strong>Neha Singh</strong><span class="badge">85%</span></div>
          </div>
        </div>
      </div>
    </div>
  `}function N(){return a.page===`loading`?`
      <div class="loading-screen" id="loadingScreen">
        <div class="loader-wrap">
          <div class="loader-mark">🎓</div>
          <div class="loader-text">CAPACITY CONNECT</div>
          <div class="loader-tag">Learn • Assess • Grow</div>
          <div class="loader-bar"><div class="loader-fill"></div></div>
          <div style="color: var(--muted); font-size: 0.82rem; letter-spacing: 0.08em; text-transform: uppercase;">Digital Capacity Building & Learning Management Portal</div>
        </div>
      </div>
    `:a.page===`landing`?v():a.page===`login`?y():a.page===`signup`?b():a.page===`forgot`?x():a.page===`role`?S():a.page===`trainee-dashboard`?C():a.page===`course`?w():a.page===`assessment`?T():a.page===`trainer-dashboard`?E():a.page===`admin-dashboard`?D():a.page===`competency`?O():a.page===`astra`?k():a.page===`certificate`?A():a.page===`notifications`?j():a.page===`analytics`?M():v()}function P(){e.innerHTML=N(),F(),a.page===`loading`&&setTimeout(()=>{let e=document.getElementById(`loadingScreen`);e&&e.classList.add(`fade-out`),setTimeout(()=>{o(`landing`)},700)},2200)}function F(){document.querySelectorAll(`[data-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.action;if(t===`auth-login`&&o(`login`),t===`auth-signup`&&o(`signup`),t===`auth-forgot`&&o(`forgot`),t===`auth-role`&&o(`role`),t===`explore-platform`&&o(`login`),t===`logout`&&(a.user=null,a.role=`Trainee`,o(`landing`)),t===`open-course`&&o(`course`),t===`take-assessment`&&p(),t===`dashboard-back`&&o(u(a.role||`Trainee`)),t===`next-question`){let e=Math.min(a.assessmentIndex+1,r.length-1);e!==a.assessmentIndex&&(a.assessmentIndex=e,P())}if(t===`prev-question`&&(a.assessmentIndex=Math.max(0,a.assessmentIndex-1),P()),t===`submit-assessment`&&m(),t===`mark-complete`&&d(),t===`next-lesson`&&f(),t===`find-trainer`&&(a.notifications.unshift(`Suitable trainer match found for Machine Learning.`),P()),t===`view-certificate`&&o(`certificate`),t===`download-certificate`&&window.print(),t===`send-astra`){let e=document.getElementById(`astraInput`);g(e.value),e.value=``}})}),document.querySelectorAll(`[data-demo-email]`).forEach(e=>{e.addEventListener(`click`,()=>l(e.dataset.demoEmail))}),document.querySelectorAll(`[data-role-select]`).forEach(e=>{e.addEventListener(`click`,()=>{a.role=e.dataset.roleSelect,o(u(a.role))})}),document.querySelectorAll(`[data-module-index]`).forEach(e=>{e.addEventListener(`click`,()=>{a.activeModule=Number(e.dataset.moduleIndex),P()})}),document.querySelectorAll(`[data-answer-index]`).forEach(e=>{e.addEventListener(`click`,()=>{h(a.assessmentIndex,Number(e.dataset.answerIndex))})}),document.querySelectorAll(`[data-ask]`).forEach(e=>{e.addEventListener(`click`,()=>{g(e.dataset.ask)})}),document.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.nav;t===`dashboard`?o(u(a.role||`Trainee`)):(t===`my-courses`||t===`learning-resources`||t===`assessments`||t===`my-progress`||t===`certificates`||t===`competencies`||t===`astra-ai`||t===`notifications`||t===`profile`||t===`settings`)&&(t===`assessments`?p():t===`competencies`?o(`competency`):t===`astra-ai`?o(`astra`):t===`notifications`?o(`notifications`):t===`certificates`?o(`certificate`):t===`dashboard`?o(u(a.role||`Trainee`)):t===`my-courses`&&o(`course`))})})}P();