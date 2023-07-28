import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Keep everything Planned</title>
        <meta property="og:title" content="Keep everything Planned" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container01">
          <img
            alt="logo"
            src="/images/icon-1500h.png"
            loading="eager"
            className="home-image"
          />
          <span className="home-text">
            <span>Keep everything Planned</span>
            <br></br>
          </span>
        </div>
        <div className="home-nav">
          <a href="#contact" className="home-link">
            <span>Contact Us</span>
            <br></br>
          </a>
        </div>
        <div data-role="BurgerMenu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-nav1">
            <div className="home-container02">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="home-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-text05">
            Stay organized and on top of your schedule with Planner
          </h1>
          <span className="home-text06">
            <span>
              The ultimate planner app that keeps everything in sync and makes
              planning a breeze! Whether you need to manage appointments,
              important events, or simply jot down your to-dos, Planner offers a
              comprehensive solution to help you stay on track and never miss a
              beat.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <img alt="image" src="/images/mock-600w.png" className="home-image2" />
      </div>
      <div className="home-features">
        <h1 className="home-text10">All these impressive features</h1>
        <div className="home-container04">
          <div className="home-feature-card">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z"></path>
            </svg>
            <div className="home-container05">
              <h2 className="home-text11">
                <span>Seamless Calendar with Smart Reminders</span>
                <br></br>
              </h2>
              <span className="home-text14">
                Enjoy a user-friendly calendar interface that allows you to
                effortlessly navigate through days, weeks, and months. Add and
                customize reminders with titles, notes, scheduled times, and
                personalized tags. Visualize your tasks with color-coded circles
                that make identification a breeze
              </span>
            </div>
          </div>
          <div className="home-feature-card1">
            <svg viewBox="0 0 1085.1474285714285 1024" className="home-icon12">
              <path d="M256 256c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM865.714 585.143c0 19.429-8 38.286-21.143 51.429l-280.571 281.143c-13.714 13.143-32.571 21.143-52 21.143s-38.286-8-51.429-21.143l-408.571-409.143c-29.143-28.571-52-84-52-124.571v-237.714c0-40 33.143-73.143 73.143-73.143h237.714c40.571 0 96 22.857 125.143 52l408.571 408c13.143 13.714 21.143 32.571 21.143 52zM1085.143 585.143c0 19.429-8 38.286-21.143 51.429l-280.571 281.143c-13.714 13.143-32.571 21.143-52 21.143-29.714 0-44.571-13.714-64-33.714l268.571-268.571c13.143-13.143 21.143-32 21.143-51.429s-8-38.286-21.143-52l-408.571-408c-29.143-29.143-84.571-52-125.143-52h128c40.571 0 96 22.857 125.143 52l408.571 408c13.143 13.714 21.143 32.571 21.143 52z"></path>
            </svg>
            <div className="home-container06">
              <h2 className="home-text15">Personalized Tags and Appearance</h2>
              <span className="home-text16">
                Customize your experience to reflect your unique style. Create,
                modify, and remove tags with distinct colors to organize your
                reminders. Moreover, personalize the overall appearance of the
                app to match your preferences and create a planner that&apos;s
                uniquely yours
              </span>
            </div>
          </div>
          <div className="home-feature-card2">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
              <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
            </svg>
            <div className="home-container07">
              <h2 className="home-text17">Sync Across All Your Devices</h2>
              <span className="home-text18">
                <span>
                  Sign in or create an account using your Google, Apple, or
                  email credentials, and unlock the power of real-time syncing.
                  Seamlessly access your planner from multiple devices, and
                  watch as changes made on one device instantly appear on
                  others. Your reminders, tags, and appearance settings stay
                  perfectly mirrored in real-time, keeping you up-to-date no
                  matter where you are
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-feature-card3">
            <svg viewBox="0 0 1024 1024" className="home-icon17">
              <path d="M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z"></path>
            </svg>
            <div className="home-container08">
              <h2 className="home-text21">Widgets for Easy Access</h2>
              <span className="home-text22">
                Maximize productivity with our range of widgets in various
                sizes. Quickly view essential information and easily manage your
                tasks without opening the app. The larger widgets display more
                details, providing a comprehensive overview of your schedule at
                a glance
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="home-contact-us">
        <div className="home-container09">
          <h1 className="home-text23">Contact Us</h1>
          <a
            href="mailto:help@planner-support.com?subject=Help request"
            className="home-link1"
          >
            help@planner-support.com
          </a>
        </div>
        <span className="home-text24">or</span>
        <form
          name="contact"
          className="home-form"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="home-textinput input"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="home-textinput1 input"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="home-textarea textarea"
            required
          ></textarea>
          <button type="submit" className="home-button button">
            <span>
              <span>Submit request</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
      <footer className="home-footer">
        <span className="home-text28">
          © 2023 Keep everything Planned, All Rights Reserved.
        </span>
        <Link to="/privacy-policy" className="home-navlink">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}

export default Home
