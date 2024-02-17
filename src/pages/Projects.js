// Remove this import if you're not using the UnderConstruction component
// import UnderConstruction from '../components/UnderConstruction.js'

import BlogPostCard from '../components/BlogPostCard.js'
import '../styles.css'
import '../figures.css'

export default function Projects() {
  return <ProjectsComponents />;
}

function ProjectsComponents() {
  return (
    <div>
      <BlogPostCard className="project0">
        <article>
          <header>
            <h1>pH Sensor System With Programmed Calibration Mode</h1>
            <p>By <span class="author">Johann Suarez</span> on <time datetime="YYYY-MM-DD">December 26, 2024</time></p> 
          </header>
          <section>

            <div class="row_set">

              <video width="200" height="400" controls>
                <source src="https://i.imgur.com/1Dvw49y.mp4" type="video/mp4"/>
              </video>

              <p>
                For context, I was chosen to work on microcontrollers that monitored
                algae tanks in an oyster farm for the 2023 December break. To monitor the algae tanks, pH level sensors, light and temperature sensors
                were attached to Arduino Megas. The client needed a dashboard to display the data collected by these sensors over time.

                Since the Arduino Megas were alrady connected to Raspberry Pi 400 computers, the data can be read from the Arduino through
                UART. In Linux, the serial port of a UART device is represented by a file, commonly <b>"/dev/ttyUSB0"</b> or <b>"/dev/ttyUSB1"</b>.

                The solution I came up with was to build a Python program that launched <a href="https://dash.plotly.com/">Plotly Dash</a>, and then ran two threads: The first thread reads incoming data from the Arduino
                from the serial port. The data picked up by the first thread is copied onto a shared queue. The second thread's job is to periodically
                check if the shared queue has new data. If the second thread notices there is new data, it then parses it into JSON data that Plotly Dash
                components can recognize. The Plotly Dash is then refreshed and then end result is a webpage with components that graphed realtime sensor data.


                <br/>
                <br/>
                While building the dashboard, I learned that the current setup had limitations. The sensor readings drift over time and gradually become
                unreliable. To get around this, the programmer who worked on this project before me did the recalibrations by hardcoding the calculated offsets to the
                Arduino's readings. Altough this worked short-term, it presented several limitations and drawbacks.

                
                <ol>
                 <li>The Arduino code has to be recompiled weekly with new calibration values.</li>
                 <li>Doing the calculation by hand was time consuming and meant that the entire row of tanks monitored by one Arduino will be taken offline.</li>
                 <li>The farthest tank for the Arduino was around 5 meters, meaning some pH sensor probes' wires would experience voltage dropoff and reduce its reading accuracy.</li>
                </ol>
              </p>

            </div>

            <figure class="cap-bot">
              <img alt="plotly dash on monitor" className="plotly_dash_monitor_image" width="380px" src="https://i.imgur.com/gxSz1VJ.jpeg"/>
              <figcaption>
                Dashboard monitors pH level and light 
              </figcaption>
            </figure>

            <div className="sketchfab-embed-wrapper">
              <iframe
                title="pH Reading System Case and Mount"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/8ee734ea2b724d068e0283ce7d61ca3d/embed?autospin=1&autostart=1"
              ></iframe>
                <p style={{ fontSize: "13px", fontWeight: "normal", margin: "5px", color: "#4A4A4A" }}>
                  <a
                    href="https://sketchfab.com/3d-models/ph-reading-system-case-and-mount-8ee734ea2b724d068e0283ce7d61ca3d?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    pH Reading System Case and Mount
                  </a> by <a
                    href="https://sketchfab.com/navier_stoked?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    wmosci
                  </a> on <a
                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee734ea2b724d068e0283ce7d61ca3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: "bold", color: "#1CAAD9" }}
                  >
                    Sketchfab
                  </a>
                </p>
            </div>

            <img alt="completed pH sensor kit setup" className="irl_ph_sensor"
              src='https://i.imgur.com/KwyLlw4.jpg'
              width="350px"
            />
            <img alt="close-up of oled display on pH sensor kit" className="irl_ph_sensor_oled"
              src='https://i.imgur.com/uzMdvOr.jpg'
              width="350px"
            />
            <img alt="the sensor kit case dimensions on Blender" className="ph_sensor_dimensions"
              src='https://i.imgur.com/Qczu3Tg.png'
              width="350px"
            />
            <img alt="3D printer base case of sensor kit" className="ph_sensor_empty_case"
              src='https://i.imgur.com/L7AdSkD.png'
              width="350px"
            />
            <img alt="component diagram of sensor kit" className="ph_sensor_component_diagram"
              src='https://i.imgur.com/7014Xl0.png'
              width="350px"
            />

              



              <br/>
              Summary:  Maintained and improved algae generation tank microcontroller systems.
              Each tank is monitored by Arduino Megas hooked with sensors to collect light, temperature,
              and pH levels. The microcontroller uses relay switches to adjust these parameters for algae growth.

              <br/>
              Contributions:
              Wrote a program to read from Arduino's serial connection port, parsed the data, and then converted
              it into tabular data for real-time plotting and visualization using Plotly Dash.
          </section>
        </article>
      </BlogPostCard>

      {/*
      <BlogPostCard className="IckyBicky">

        <img className="pi_display"
          src='https://i.imgur.com/Rveor8E.jpg'
          width="350px"
        />
      </BlogPostCard>
      */}


      <BlogPostCard className="project1">
        <h1>ChromaBlend: A Fix to DeepRemaster's Low Resolution Limitation</h1>
        <div className="chromablend">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IBmc5fa9X9A?si=E7mDBSW0vxQz8xPO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <br/>
        <img alt="animation displaying chroma blend's function" className="chroma_blend_animation"
          src='https://i.imgur.com/3ffp1Fz.gif'
          width="350px"
        />


        <br/>
        <img alt="handpainted reference frame" className="reference_frame_manual_colorization"
          src='https://i.imgur.com/ZuVE3go.jpg'
          width="350px"
        />

      </BlogPostCard>

  <BlogPostCard className="face_tracking_webcam">
    <h1>Face Tracking With a Webcam and Two Servo Motors</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/TcmhbfcM2XQ?si=GolZ1qMyJUD9ZZ0y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </BlogPostCard>
    </div>
  );
}
