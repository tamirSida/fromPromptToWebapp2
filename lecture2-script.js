const slides = [
    {
        title: "Welcome Back! 👋",
        content: `
          <p><span class="emoji">🎉</span> Welcome to Lecture 2!</p>
          <p>Great to see everyone again. Let's continue our journey into web development with AI.</p>
          <div class="example-box">
            <p><strong>Today's Focus:</strong></p>
            <ul>
              <li>Quick recap of what we learned</li>
              <li>Address any questions from last time</li>
              <li>Dive into forms and data handling</li>
              <li>Introduction to SEO fundamentals</li>
            </ul>
          </div>
          <p>This session will be more interactive with live demos, so get ready to participate!</p>
        `
    },
    {
        title: "Quick Recap: What We Learned",
        content: `
          <p>Let's quickly review the key concepts from our first session:</p>
          <ul>
            <li><span class="emoji">🌐</span> <strong>How the Web Works</strong> - Request/response cycle, browsers, servers</li>
            <li><span class="emoji">🏗️</span> <strong>Website vs Web App</strong> - Static vs dynamic content</li>
            <li><span class="emoji">📝</span> <strong>Core Technologies</strong> - HTML (structure), CSS (styling), JavaScript (interactivity)</li>
            <li><span class="emoji">🤖</span> <strong>AI-Assisted Development</strong> - Using AI to generate code</li>
            <li><span class="emoji">🚀</span> <strong>Deployment</strong> - Getting websites live with Netlify</li>
          </ul>
          <div class="example-box">
            <p><strong>Key Takeaway:</strong> You can build professional websites without years of coding experience, thanks to AI tools and modern hosting platforms.</p>
          </div>
          <p><span class="highlight">Most importantly</span> - You learned that web development is accessible to everyone!</p>
        `
    },
    {
        title: "Questions from Last Time?",
        content: `
          <div class="center-content">
            <p><span class="emoji">❓</span> <strong>Let's address your questions!</strong></p>
            
            <div class="example-box">
              <p><strong>Common Questions I Often Get:</strong></p>
              <ul>
                <li>"Can I really build complex websites with AI?"</li>
                <li>"What if the AI-generated code doesn't work?"</li>
                <li>"How do I know if my website is good?"</li>
                <li>"Can I make money from websites I build?"</li>
                <li>"How do I handle website updates and maintenance?"</li>
              </ul>
            </div>
            
            <p class="highlight">This is your time - ask about anything from last session or general web development questions!</p>
            
            <div class="example-box">
              <p><strong>Remember:</strong> There are no silly questions. Everyone started somewhere, and the web development community is generally very helpful and welcoming.</p>
            </div>
          </div>
        `
    },
    {
        title: "Today's Focus: Forms & SEO",
        content: `
          <p>Today we'll cover two essential topics for taking your websites to the next level:</p>
          
          <div class="example-box">
            <p><strong>🔗 Forms: Connecting with Your Visitors</strong></p>
            <ul>
              <li>Why forms are crucial for websites</li>
              <li>The data storage challenge</li>
              <li>Two practical solutions: Google Forms vs Netlify Forms</li>
              <li>Live demo: Building a contact form</li>
            </ul>
          </div>
          
          <div class="example-box">
            <p><strong>🔍 SEO: Getting Found on Google</strong></p>
            <ul>
              <li>What is SEO and why it matters</li>
              <li>Simple techniques to improve your website's visibility</li>
              <li>Tools to check your SEO performance</li>
            </ul>
          </div>
          
          <p><strong>Why These Topics?</strong> Forms let you collect information from visitors (leads, feedback, orders), while SEO helps people find your website in the first place.</p>
          
          <p class="highlight">By the end of today, your websites will be more interactive and discoverable!</p>
        `
    },
    {
        title: "The Problem: Where Does Form Data Go?",
        content: `
          <p>When someone fills out a form on your website, where does that information go?</p>
          
          <div class="example-box">
            <p><strong>The Reality Check:</strong></p>
            <p>Static websites (like the ones we built) can't store data by themselves. They're just files sitting on a server - they don't have a database or way to process form submissions.</p>
          </div>
          
          <p><strong>What happens with a basic HTML form?</strong></p>
          <div class="code-example">
            &lt;form&gt;<br>
            &nbsp;&nbsp;&lt;input type="text" placeholder="Your name"&gt;<br>
            &nbsp;&nbsp;&lt;input type="email" placeholder="Your email"&gt;<br>
            &nbsp;&nbsp;&lt;button type="submit"&gt;Send&lt;/button&gt;<br>
            &lt;/form&gt;
          </div>
          
          <p><span class="highlight">Result: Nothing happens!</span> Or worse, you get an error page.</p>
          
          <p><strong>The Solution:</strong> We need a service that can:</p>
          <ul>
            <li>Receive the form data when someone submits it</li>
            <li>Store or forward that data to you</li>
            <li>Handle the technical complexity behind the scenes</li>
          </ul>
          
          <p>Fortunately, there are great solutions for this...</p>
        `
    },
    {
        title: "Solution 1: Google Forms",
        content: `
          <p><span class="emoji">📋</span> <strong>Google Forms</strong> - The easiest way to collect data</p>
          
          <div class="example-box">
            <p><strong>How It Works:</strong></p>
            <ol>
              <li>Create a form in Google Forms</li>
              <li>Embed it in your website or link to it</li>
              <li>Google handles all data collection and storage</li>
              <li>View responses in Google Sheets</li>
            </ol>
          </div>
          
          <p><strong>✅ Pros:</strong></p>
          <ul>
            <li><span class="emoji">🆓</span> <strong>Completely free</strong> - No limits on responses</li>
            <li><span class="emoji">⚡</span> <strong>Super easy setup</strong> - No coding required</li>
            <li><span class="emoji">📊</span> <strong>Built-in analytics</strong> - Charts and response summaries</li>
            <li><span class="emoji">📧</span> <strong>Email notifications</strong> - Get notified of new responses</li>
            <li><span class="emoji">📱</span> <strong>Mobile friendly</strong> - Works great on all devices</li>
            <li><span class="emoji">🔒</span> <strong>Secure and reliable</strong> - It's Google!</li>
          </ul>
          
          <p><strong>❌ Cons:</strong></p>
          <ul>
            <li><span class="emoji">🎨</span> <strong>Limited styling</strong> - Looks like Google Forms</li>
            <li><span class="emoji">🔗</span> <strong>External link</strong> - Takes users away from your site</li>
            <li><span class="emoji">📱</span> <strong>Google branding</strong> - Shows "Powered by Google"</li>
          </ul>
        `
    },
    {
        title: "Solution 2: Netlify Forms",
        content: `
          <p><span class="emoji">🔧</span> <strong>Netlify Forms</strong> - Native form handling for your website</p>
          
          <div class="example-box">
            <p><strong>How It Works:</strong></p>
            <ol>
              <li>Add a special attribute to your HTML form</li>
              <li>Deploy your site to Netlify</li>
              <li>Netlify automatically detects and handles form submissions</li>
              <li>View submissions in your Netlify dashboard</li>
            </ol>
          </div>
          
          <p><strong>✅ Pros:</strong></p>
          <ul>
            <li><span class="emoji">🎨</span> <strong>Complete design control</strong> - Style forms however you want</li>
            <li><span class="emoji">📧</span> <strong>Email notifications</strong> - Get instant alerts for new submissions</li>
            <li><span class="emoji">🏠</span> <strong>Stays on your site</strong> - Users never leave your website</li>
            <li><span class="emoji">🔗</span> <strong>Easy integration</strong> - Just add one HTML attribute</li>
            <li><span class="emoji">🚫</span> <strong>No external branding</strong> - Looks completely native</li>
          </ul>
          
          <p><strong>❌ Cons:</strong></p>
          <ul>
            <li><span class="emoji">💰</span> <strong>Limited free tier</strong> - 100 submissions/month free</li>
            <li><span class="emoji">🛠️</span> <strong>Slightly more technical</strong> - Requires HTML knowledge</li>
            <li><span class="emoji">📊</span> <strong>Basic analytics</strong> - Less detailed than Google Forms</li>
          </ul>
        `
    },
    {
        title: "Comparison: Which Should You Choose?",
        content: `
          <table>
            <tr>
              <th>Feature</th>
              <th>Google Forms</th>
              <th>Netlify Forms</th>
            </tr>
            <tr>
              <td><strong>Cost</strong></td>
              <td>Free (unlimited)</td>
              <td>Free (100/month), then $19/month</td>
            </tr>
            <tr>
              <td><strong>Setup Difficulty</strong></td>
              <td>Very Easy</td>
              <td>Easy (requires basic HTML)</td>
            </tr>
            <tr>
              <td><strong>Design Control</strong></td>
              <td>Limited themes</td>
              <td>Complete control</td>
            </tr>
            <tr>
              <td><strong>User Experience</strong></td>
              <td>Leaves your website</td>
              <td>Stays on your website</td>
            </tr>
            <tr>
              <td><strong>Email Notifications</strong></td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td><strong>Data Export</strong></td>
              <td>Google Sheets, CSV</td>
              <td>CSV download</td>
            </tr>
            <tr>
              <td><strong>Analytics</strong></td>
              <td>Built-in charts & summaries</td>
              <td>Basic submission list</td>
            </tr>
          </table>
          
          <div class="example-box">
            <p><strong>My Recommendation:</strong></p>
            <ul>
              <li><strong>Google Forms:</strong> Perfect for beginners, surveys, feedback collection</li>
              <li><strong>Netlify Forms:</strong> Best for professional sites, contact forms, lead generation</li>
            </ul>
          </div>
          
          <p>The good news? <span class="highlight">You can always start with one and switch to the other later!</span></p>
        `
    },
    {
        title: "Live Demo: Building Forms",
        content: `
          <div class="center-content">
            <p><span class="emoji">🛠️</span> <strong>Let's Build Forms Together!</strong></p>
            
            <div class="example-box">
              <p><strong>Demo 1: Google Forms Integration</strong></p>
              <ol>
                <li>Create a simple contact form in Google Forms</li>
                <li>Customize the design and questions</li>
                <li>Get the embed code</li>
                <li>Add it to our website</li>
                <li>Test the submission process</li>
              </ol>
            </div>
            
            <div class="example-box">
              <p><strong>Demo 2: Netlify Forms Setup</strong></p>
              <ol>
                <li>Create an HTML contact form</li>
                <li>Add the netlify attribute</li>
                <li>Style it with CSS</li>
                <li>Deploy to Netlify</li>
                <li>Test and view submissions</li>
              </ol>
            </div>
            
            <p class="highlight">You'll see both approaches in action and can choose which works best for your needs!</p>
          </div>
        `
    },
    {
        title: "Introduction to SEO",
        content: `
          <p><span class="emoji">🔍</span> <strong>SEO (Search Engine Optimization)</strong> - Getting found on Google</p>
          
          <div class="example-box">
            <p><strong>What is SEO?</strong></p>
            <p>SEO is the practice of optimizing your website to rank higher in search engine results. When someone searches for something related to your business or content, you want your website to appear on the first page of Google.</p>
          </div>
          
          <p><strong>Why Does SEO Matter?</strong></p>
          <ul>
            <li><span class="emoji">👀</span> <strong>Visibility</strong> - 75% of people never go past the first page of search results</li>
            <li><span class="emoji">🆓</span> <strong>Free traffic</strong> - Organic search visitors don't cost you anything</li>
            <li><span class="emoji">🎯</span> <strong>Targeted audience</strong> - People searching are already interested in your topic</li>
            <li><span class="emoji">💰</span> <strong>Business growth</strong> - More visibility = more potential customers</li>
          </ul>
          
          <div class="example-box">
            <p><strong>Reality Check:</strong></p>
            <p>You could build the most beautiful website in the world, but if no one can find it, it won't help your business. SEO is about discoverability.</p>
          </div>
          
          <p><strong>Good News:</strong> <span class="highlight">Basic SEO is not complicated</span> and can make a huge difference!</p>
        `
    },
    {
        title: "Simple SEO Techniques That Work",
        content: `
          <p>Here are the most important SEO basics you can implement right away:</p>
          
          <div class="example-box">
            <p><strong>1. Title Tags & Descriptions</strong></p>
            <div class="code-example">
              &lt;title&gt;Best Coffee Shop in Downtown | Joe's Cafe&lt;/title&gt;<br>
              &lt;meta name="description" content="Visit Joe's Cafe for the best coffee in downtown. Fresh roasted beans, cozy atmosphere, free WiFi. Open 7am-7pm daily."&gt;
            </div>
            <p>These appear in Google search results and determine if people click on your site.</p>
          </div>
          
          <div class="example-box">
            <p><strong>2. Header Structure</strong></p>
            <div class="code-example">
              &lt;h1&gt;Welcome to Joe's Cafe&lt;/h1&gt;<br>
              &lt;h2&gt;Our Coffee Menu&lt;/h2&gt;<br>
              &lt;h3&gt;Espresso Drinks&lt;/h3&gt;<br>
              &lt;h3&gt;Cold Brew Options&lt;/h3&gt;
            </div>
            <p>Use headers logically - they help Google understand your content structure.</p>
          </div>
          
          <div class="example-box">
            <p><strong>3. Image Alt Text</strong></p>
            <div class="code-example">
              &lt;img src="latte.jpg" alt="Freshly made latte with foam art at Joe's Cafe"&gt;
            </div>
            <p>Helps Google understand what your images show and improves accessibility.</p>
          </div>
          
          <div class="example-box">
            <p><strong>4. Quality Content</strong></p>
            <p>Write content that actually helps your visitors. Google rewards websites that provide value to users.</p>
          </div>
          
          <p><span class="highlight">These four techniques alone can dramatically improve your search rankings!</span></p>
        `
    },
    {
        title: "Putting It All Together",
        content: `
          <p>Let's wrap up with key takeaways and next steps:</p>
          
          <div class="example-box">
            <p><strong>📝 Forms: Choose Your Path</strong></p>
            <ul>
              <li><strong>Starting out?</strong> Use Google Forms for simplicity</li>
              <li><strong>Building professionally?</strong> Consider Netlify Forms for better integration</li>
              <li><strong>High volume?</strong> Stick with Google Forms' unlimited submissions</li>
            </ul>
          </div>
          
          <div class="example-box">
            <p><strong>🔍 SEO: Start with Basics</strong></p>
            <ul>
              <li>Write descriptive page titles</li>
              <li>Add meta descriptions to every page</li>
              <li>Use headers (H1, H2, H3) properly</li>
              <li>Include alt text for all images</li>
              <li>Create content that helps your audience</li>
            </ul>
          </div>
          
          <div class="example-box">
            <p><strong>🎯 Action Items for This Week:</strong></p>
            <ol>
              <li>Add a form to your website using either method</li>
              <li>Review your page titles and descriptions</li>
              <li>Add alt text to your images</li>
              <li>Check your site structure with proper headers</li>
            </ol>
          </div>
          
          <p><strong>Remember:</strong> <span class="highlight">Small improvements compound over time.</span> Your website will get better with each optimization!</p>
          
          <p><strong>Questions?</strong> Feel free to reach out anytime at tamir@versionbravo.com</p>
        `
    }
];

// DOM Elements
const slideContainer = document.getElementById('slideContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideCounter = document.getElementById('slideCounter');
const slideNav = document.getElementById('slideNav');
const progressBar = document.getElementById('progressBar');

// Current slide index
let currentSlide = 0;
const totalSlides = slides.length;

// Initialize presentation
function initPresentation() {
  // Create slides
  createSlides();
  
  // Create navigation dots
  createNavDots();
  
  // Set first slide as active
  showSlide(0);
  
  // Update progress bar
  updateProgressBar();
  
  // Add event listeners
  addEventListeners();
  
  // Add scroll indicator to slides with overflow content
  addScrollIndicators();
}

// Create slide elements
function createSlides() {
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('div');
    slideElement.className = 'slide';
    slideElement.id = `slide-${index}`;
    
    const slideInner = document.createElement('div');
    slideInner.className = 'slide-inner';
    
    slideInner.innerHTML = `
      <h2 class="slide-title">${slide.title}</h2>
      <div class="slide-content">${slide.content}</div>
    `;
    
    // Add scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    scrollIndicator.innerHTML = '<i>⬇️ Scroll for more</i>';
    slideElement.appendChild(scrollIndicator);
    
    slideElement.appendChild(slideInner);
    slideContainer.appendChild(slideElement);
  });
}

// Create navigation dots
function createNavDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'slide-dot';
    dot.dataset.slide = index;
    
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.slide));
    });
    
    slideNav.appendChild(dot);
  });
}

// Check if slide has overflow content and show/hide scroll indicator
function addScrollIndicators() {
  const slideInners = document.querySelectorAll('.slide-inner');
  const indicators = document.querySelectorAll('.scroll-indicator');
  
  slideInners.forEach((slideInner, index) => {
    const checkScroll = () => {
      const hasOverflow = slideInner.scrollHeight > slideInner.clientHeight;
      const scrolledToBottom = Math.ceil(slideInner.scrollTop + slideInner.clientHeight) >= slideInner.scrollHeight;
      
      if (hasOverflow && !scrolledToBottom && currentSlide === index) {
        indicators[index].classList.add('visible');
      } else {
        indicators[index].classList.remove('visible');
      }
    };
    
    // Check on slide change
    slideInner.addEventListener('scroll', checkScroll);
    
    // Set up a resize observer to check when size changes
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(slideInner);
  });
}

// Show specific slide
function showSlide(index) {
  // Validate index
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  
  // Update current slide index
  currentSlide = index;
  
  // Hide all slides
  const allSlides = document.querySelectorAll('.slide');
  allSlides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  // Show current slide
  const currentSlideElement = document.getElementById(`slide-${currentSlide}`);
  currentSlideElement.classList.add('active');
  
  // Update counter text
  slideCounter.textContent = `${currentSlide + 1}/${totalSlides}`;
  
  // Update nav dots
  updateNavDots();
  
  // Update progress bar
  updateProgressBar();
  
  // Update button states
  updateButtonStates();
  
  // Check scroll indicators
  checkScrollIndicators();
}

// Check if current slide needs scroll indicator
function checkScrollIndicators() {
  const slideInners = document.querySelectorAll('.slide-inner');
  const indicators = document.querySelectorAll('.scroll-indicator');
  
  if (slideInners[currentSlide]) {
    const slideInner = slideInners[currentSlide];
    const hasOverflow = slideInner.scrollHeight > slideInner.clientHeight;
    const scrolledToBottom = Math.ceil(slideInner.scrollTop + slideInner.clientHeight) >= slideInner.scrollHeight;
    
    if (hasOverflow && !scrolledToBottom) {
      indicators[currentSlide].classList.add('visible');
    } else {
      indicators[currentSlide].classList.remove('visible');
    }
  }
}

// Update navigation dots
function updateNavDots() {
  const dots = document.querySelectorAll('.slide-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Update progress bar
function updateProgressBar() {
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = `${progress}%`;
}

// Update button states
function updateButtonStates() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Add event listeners
function addEventListeners() {
  // Button navigation
  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
      showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < totalSlides - 1) {
      showSlide(currentSlide + 1);
    } else if (e.key === 'Home') {
      showSlide(0);
    } else if (e.key === 'End') {
      showSlide(totalSlides - 1);
    }
  });
  
  // Swipe navigation for touch devices
  let touchStartX = 0;
  let touchEndX = 0;
  
  slideContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  slideContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const swipeThreshold = 50;
    
    if (touchEndX < touchStartX - swipeThreshold && currentSlide < totalSlides - 1) {
      // Swiped left - next slide
      showSlide(currentSlide + 1);
    } else if (touchEndX > touchStartX + swipeThreshold && currentSlide > 0) {
      // Swiped right - previous slide
      showSlide(currentSlide - 1);
    }
  }
  
  // Monitor slide content scrolling to update indicators
  document.querySelectorAll('.slide-inner').forEach((slideInner, index) => {
    slideInner.addEventListener('scroll', () => {
      if (currentSlide === index) {
        checkScrollIndicators();
      }
    });
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPresentation); 