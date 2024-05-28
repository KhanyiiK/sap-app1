import React, { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import FullBlog from "../components/FullBlog"; // Import the FullBlog component

// BlogThumbnail component to display individual blog thumbnails
const BlogThumbnail = ({ title, thumbnail, onClick }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        marginBottom: "10px",
      }}
      onClick={onClick}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{
          width: "120px",
          height: "auto",
          objectFit: "cover",
          borderRadius: "5px",
        }}
      />
      <h3>{title}</h3>
    </div>
  );
};

// BlogPage component to display blog page layout
const BlogPage = () => {
  // Example blog data
  const [blogs] = useState([
    {
      id: 1,
      title: "Critical Analysis Essay on Net/Web Art",
      thumbnail: "/Images/Makeup2.jpeg",
      content:
      <div>
        <p>
        content: " Net art, also referred to as Internet art emerged in the 1990s and continued into the 2000s
      using the internet as its platform for expression. With the rise of web browsing in the '90s
      artists began exploring ways to display their work in art settings leading to interconnected
      viewing experiences. Often linked with " media art" or digital art Net art includes creative
      projects ranging from experimental websites to immersive online installations. Artists in this
      field use tools like web browsers, coding languages, scripts, search engines and other online
      resources to craft captivating artworks that challenge notions of art and how it is presented.
      Net art, a field rooted in the realm showcases the changing connection, between technology
      and artistic creativity. According to Hertzmanns insights in "Can Computers Produce Art?"
      (2018) "Computers are increasingly becoming integral tools in the creative process, blurring
      the boundaries between human and machine-generated art." (Hertzmann,2018). This
      statement emphasizes how technology has revolutionized processes emphasizing the role of
      digital tools, in shaping modern art genres.Net art is a form of art that utilizes the Internet as
      its main medium and artworks often incorporate information from sources and websites
      adding to their energy and transient nature. In essence net art is a type of artwork designed
      specifically for the internet with a focus on its presence and impact online. Therefore,
      creating a platform for showcasing this type of art becomes crucial, for engaging with
      audiences. Net art is an emerging field that blends technology with creativity to push the
      boundaries of expression. In this essay I aim to delve into "Image Objects" (2011 present) by
      Artie Vierkant a study launched in 2011 that questions ideas of art. Through combining
      theories and carrying out my research I seek to analyse the technical elements of "Image
      Objects " emphasizing its significance, in the field of art.</p>
      <br>
      </br>
     <p> In their study, on how machines contribute to creation "Still and d’Inverno propose a
      Deweyan perspective that challenges the notion of machines as passive tools, suggesting
      instead that they can actively engage in the creative process, contributing to the evolution of
      art." (Still and d’Inverno,2019) This perspective is consistent, with the idea that art's a
      collaborative endeavour. Artie Vierkants series "Image Objects" showcases the influence of
      technology, in modern art. By blending physical elements with precision Vierkant explores
      the overlap, between virtual and real worlds pushing boundaries of conventional artistic
      portrayal. The series "Image Objects" blurs the line, between sculpture and modified
      photographic images by creating a blend of expression that merges the digital and physical
      worlds. Originally conceived as files these artworks are translated into UV prints on dibond
      material meticulously crafted to capture the essence of the piece. The result is prints that
      possess a quality. Vierkant explains that the experience is divided between encountering the
      art in a gallery setting and exploring its variations showcasing the interplay between physical
      interaction and digital interpretation. This transformation process highlights the flexibility of
      representation as Vierkant’s work transitions from virtual to forms challenging conventional
      ideas, about artistic mediums. Furthermore, once the artist or a gallery officially documents it
      changes are made to the documentation images deviating from the representation of the
      object. This method as described by Vierkant results, in artworks that build upon concepts
      sparking a conversation between the artwork and its digital versions. Viewers are presented
      with an experience, interacting with the pieces in a gallery setting while also exploring
      interpretations through prints, publications, and online platforms. The act of documenting
      itself transforms into an art form incorporating collage techniques, stylized watermarks, and
      other elements to enhance how viewers perceive and engage with the artwork. Vierkant
      underscores the power that comes from involvement; "I find it most exciting when someone
      else influences a piece rather than just sharing it again." This collaborative approach blurs
      the lines, between creator and audience interaction further contributing to a nuanced
      discussion surrounding Vierkants "Image Objects."<p/>
      <br></br>
      <p>Lev Manovich’s book "The Language of New Media" sets the stage for exploring how digital
      aesthetics impact expression. The concept of "database aesthetics" discussed by Manovich
      resonates with Vierkant’s ideas, in "Image Objects," where he delves into the fusion of
      databases and physical art creation. As Manovich asserts, "In new media, the database is
      the centre of the creative act". This perspective is reflected in Vierkant’s use of files as a
      launchpad, for his artistic endeavours. By embracing Manovich’s principles Vierkant
      showcases how technology can spark creativity turning intangible data into concrete forms
      that challenge traditional artistic conventions. "Image Objects" is visually appealing,
      challenging ideas of artistry drawing viewers in with its aesthetic charm. Vierkants careful
      work, in turning files into UV prints on dibond material produces artworks, with a distinctive
      sculptural feel. The way light and shadow interact, the texture of the print surface and the
      blend of colours come together to form a captivating display that captivates the viewer on a
      sensory level. The visual goes beyond the artworks to include the digitally enhanced
      installation views and documentation images. Vierkants purposeful modifications, to these
      visuals add a touch of liveliness and variety enhances the journey. By utilizing collage
      methods, stylized watermarks and various digital enhancements Vierkant turns
      documentation into an art form creating a distinction, between the original artwork and its
      depictions. The smooth transition, from the digital to the world along with the incorporation of
      collage elements and digital enhancements infuses the artworks with a dynamic feel. Every
      encounter becomes a journey encouraging viewers to delve into its details and ponder the
      blurred lines, between the virtual and tangible realms. Viewers exploring the landscapes
      depicted in Vierkant’s artwork are encouraged to rethink their ideas of beauty, shape, and
      artistic creativity in today’s era. This emphasizes the charm of "Image Objects" and solidifies
      its reputation, as an innovative representation of modern artistry, with the power to reshape
      the digital art landscape.</p>
      <br></br>
      <p>Furthermore, Anne Friedberg delves into the concept of "the window”, in her work "The
      Virtual Window; From Alberti to Microsoft " offering insights into how physical and virtual
      spaces intersect in digital art. By examining the role of the window as a link between viewers
      and digital images Friedberg echoes Vierkant’s idea of engaging with objects while
      interpreting them digitally through pictures. She points out that "The window has provided a
      screen, a frame, and a metaphor for visualizing the world as well as for mediating our
      interactions with it." This dual perspective reflects the changing dynamics of perception and
      representation, in our age as discussed by Friedberg. Friedbergs study of using windows as
      a symbol to understand the world connects with Vierkants focus on how viewers interact with
      objects and interpret them digitally through images. Vierkant intentionally changes
      installation views and documentation images blurring the line, between digital portrayals.
      This prompts viewers to think about how perception and representation evolve, in today’s
      era.</p>
      <br></br>
      <p>Vierkant’s art practice thrives on collaboration, where changes to the artwork play a role, in
      shaping its unfolding story and discussions. This approach aligns with Lev Manovich’s
      concept of "remix culture" explored in his work "Remix Theory." Manovich suggests that
      today’s digital culture is defined by blending and reshaping existing elements fostering forms
      of creativity and involvement. Vierkants embrace of interaction mirrors this philosophy with
      modifications to his pieces contributing to their development and adaptation, in the digital
      realm. As Manovich aptly states, "In new media, works are not created, they are
      engineered." This engineering process highlights the collaborative and iterative nature of
      digital art production. Friedbergs analysis offers a framework to delve into Vierkant’s series
      revealing the relationship, between virtual spaces in modern art. By linking Friedbergs study
      of the window as a symbol with Vierkants "Image Objects " we can understand how the
      series explores the window as a realm for reflection and interpretation prompting viewers to
      rethink their views on space, interaction, and interpretation in art. As Friedberg aptly states,
      "The window serves as a dynamic interface, shaping our engagement with both physical and
      virtual realities, and blurring the boundaries between the two."</p>
      <br></br>
      <p>Understanding Artie Vierkants artistic approach goes beyond the conceptual and aesthetic
      elements. It is essential to delve into technical aspects of "Image Objects" to fully grasp the
      depth of his process. Vierkant’s series showcases a range of tools and methods highlighting
      how technology plays a pivotal role, in shaping modern artistic expression. Vierkants unique
      approach, to "Image Objects" stands out in its utilization of editing software like Photoshop to
      craft and alter the digital materials. These foundational files form the core of the series
      showcasing a fusion of techniques with traditional artistic methods. With adeptness, in
      manipulation tools Vierkant intricately adjusts images to create art pieces that seamlessly
      blend the realms of physical reality. His method includes converting files into UV prints, on
      dibond highlighting how technology influences art in a transformative way. This careful
      attention to detail connects the physical realms questioning ideas about materials. Moreover,
      purposeful changes to installation perspectives and image documentation elevate the
      concept of "Image Objects " creating a distinction, between the work and its representations.
      Arthur Krokers ideas presented in "The Will to Technology and the Culture of Nihilism" offer
      a perspective to explore how Artie Vierkants work resonates in today’s society. Kroker
      discusses the impact of the age shedding light on how Vierkant’s art aligns, with broader
      cultural changes. A key focus of Krokers examination is determinism emphasizing how
      technology increasingly shapes experiences. Vierkants "Image Objects" can be seen as a
      reflection of this state described by Kroker, where the lines between virtual realms blurs. By
      utilizing tools Vierkant navigates the connection between the digital worlds presenting a
      mirror to the complexities of contemporary life As Kroker provocatively suggests, "The will to
      technology is the will to nihilism," highlighting the profound implications of technology on
      contemporary culture and human identity. When we incorporate Kroker’s perspectives into
      examining "Image Objects " we achieve a comprehension of Vierkants contributions, within
      the wider cultural and philosophical framework of the digital era. Vierkants artistic
      endeavours mirror society’s interaction with technology and its significant influence on life.
      As highlighted by Kroker, Vierkant’s investigation, into the convergence of art and
      technology delves into the intricacies of day experiences in an ever more interconnected
      world.</p>
      <br></br>
      <p>When we combine these frameworks with an exploration of "Image Objects " it becomes
      evident that Vierkant’s series demonstrates how digital advancements can revolutionize
      practices. By delving into the intersection of digital realms Vierkant challenges conventional
      notions of artistic representation and takes viewers on an engaging journey, through fluidity,
      touch, and presence. In the changing art landscape "Image Objects" stands out as an
      illustration of technologies transformative impact and its influence on the future of artistic
      expression. Vierkants inventive method blurs the lines between the virtual and the physical
      reshaping how viewers engage with art and introducing paths for discovery and
      interpretation. As we navigate the shifting terrain of art "Image Objects" shines as a symbol
      of creativity and potential showcasing technologies capacity to redefine our perception of art
      and its role in society.
      In Conclusion, Artie Vierkants work "Image Objects" showcases how technology has
      reshaped art blending physical elements to push boundaries and engage viewers in an
      interactive experience exploring fluidity, touch, and presence. By melding techniques, with
      craftsmanship Vierkant blurs the lines, between the virtual and physical worlds reflecting our
      modern interconnected lives. Vierkant’s series acts as a guiding light, for creativity and
      advancement showcasing how technology can reshape our views on art and its importance
      in today’s society.</p>
      <br></br>
      
      Reference Images of Net Art:<br></br>
      <img src= "/Images/Reference Image 1.jpg"  alt="Reference 1" style={{ width: '30%' }} />
        <img src= "/Images/Reference Image 2.jpg" alt="Reference 2" style={{ width: '30%' }} />
      <p>Reference list<br></br>
      Anon, (n.d.). Hertzmann, A., 2018, May. Can computers create art?. In Arts (Vol. 7, No. 2, p.
      18). MDPI.
      artievierkant.com. (n.d.). Artie Vierkant. [online] Available at:
      http://artievierkant.com/imageobjects.php.
      ARTUNER | Curated Contemporary Art. (n.d.). Artie Vierkant’s Image Objects: A Brief
      History. [online] Available at: https://www.artuner.com/insight/artie-vierkants-image-
      objects-brief-history/.
      Autor: Arthur Kroker (2004). The Will to Technology and the Culture of Nihilism Heidegger,
      Marx, Nietzsche. Editorial: Toronto; Buffalo; London University Of Toronto Press.
      Friedberg, A. (2009). The virtual window : from Alberti to Microsoft. Cambridge, Mass.: Mit
      Press.
      Manovich, L. (2001). The Language of New Media. Cambridge: Mit Press.
      NET ART ANTHOLOGY: Image Objects. (2016). NET ART ANTHOLOGY: Image Objects.
      [online] Available at: https://anthology.rhizome.org/image-objects.
      netspecific.net. (n.d.). What is net art? [online] Available at:
      https://netspecific.net/en/netspecific/what-is-net-art.
      Still, A. and d’Inverno, M., 2019, March. Can machines be artists? A Deweyan response in
      theory and practice. In Arts (Vol. 8, No. 1, p. 36). MDPI. (n.d.). Still, A. and d’Inverno, M.,
      2019, March. Can machines be artists? A Deweyan response in theory and practice. In Arts
      (Vol. 8, No. 1, p. 36). MDPI.
      Tate (2018). Internet Art – Art Term | Tate. [online] Tate. Available at:
      https://www.tate.org.uk/art/art-terms/i/internet-art.
      www.artsy.net. (n.d.). Net Art | Artsy. [online] Available at: https://www.artsy.net/gene/net-
      art.",
      </p>
        </p>
      </div>
    },
    {
      id: 2,
      title: "Net Art Reseacrh - Colorful Canvas",
      thumbnail: "/Images/Makeup3.jpeg",
      content: 
      <div>
        <p>
            <p><b>Description:</b><br></br>
            "Dynamic Color Canvas: Expressive Digital Art" is an interactive internet artwork designed to provide 
            users with a creative outlet for expressing themselves through spontaneous and colorful digital compositions. 
            The project offers a dynamic canvas where users can engage in intuitive click-and-drag interactions to generate
             vibrant patterns and designs. By combining the immediacy of digital drawing with the unpredictability of random color 
             generation, the artwork encourages experimentation and exploration of visual aesthetics in a playful and accessible manner.
             The idea, behind "Dynamic Color Canvas; Expressive Digital Art" comes from a passion to use technology to make artistic expression
              more accessible and encourage creativity in an online setting. Taking cues from painting methods spontaneity and the vast possibilities 
              of tools this artwork aims to remove barriers for those eager to explore their artistic side. Moreover the project is influenced by the 
              ever changing world embracing unpredictability and chance as integral parts of the creative journey. By providing a platform for users 
              to freely express themselves and try things " Color Canvas" strives to celebrate the pleasure of creativity and the boundless imagination 
              of humanity, in this digital era.</p>
             <br></br>
             <p>
             <b>Features:</b><br></br>
            1. Intuitive Drawing Interface: The canvas interface is designed to be intuitive and user-friendly, allowing users of all skill levels to create artwork effortlessly.<br></br>
            2. Fluid Interaction: Users can seamlessly transition between clicking and dragging actions to produce fluid and dynamic strokes on the canvas.<br></br>
            3.Random Color Generation: Each interaction with the canvas triggers the generation of a random color, ensuring that every stroke contributes to a visually diverse and captivating composition.<br></br>
            4. Color Palette: For users who prefer more control over their color choices, a color palette is provided, allowing them to select specific colors to paint with.<br></br>
            5.Undo/Redo Functionality: To support the creative process and enable experimentation, the artwork includes undo and redo functionality, empowering users to revise or refine their creations as they see fit.<br></br>
            6.Clear Canvas Option: At any point during the creative process, users have the option to clear the canvas and start anew, providing a fresh canvas for further exploration.<br></br>
             </p>
             <br></br>
             <p>
             <b>Example Projects:</b><br></br>
             "HTML5 Canvas Drawing App with Undo and Redo" by Tuts+ Code: https://code.tutsplus.com/tutorials/create-a-html5-canvas-drawing-app-with-undo-functionality--cms-23320
             "Building a Simple Paint App with HTML5 Canvas and JavaScript" by Scotch.io: https://scotch.io/tutorials/building-a-simple-paint-app-with-html5-canvas-and-javascript
             </p>
             <br></br>
             <p>
             <b>Technical Concerns:</b><br></br>
            1. Real-Time Interaction: Ensuring smooth and responsive drawing interactions, especially in scenarios with multiple users simultaneously interacting with the canvas.<br></br>
            2.Color Generation: Generating random colors that are visually appealing and harmonious, while also considering factors like contrast and saturation.<br></br>
            3. Undo/Redo Functionality: Implementing a reliable undo/redo system that accurately tracks and reverses user actions without compromising performance or memory usage.<br></br>
            4. Optimization: Optimizing the rendering and processing of canvas elements to maintain performance, especially on devices with limited computational resources.<br></br>
             </p>
             <b></b>
             <p>

             </p>
             <p>
                <b>Inspiration:</b>
    
                Mark Napier
                net.flag: the first year, 2012
                <img src= "/Images/Net Art 1.png"  alt="Reference 3" style={{ width: '30%' }} />
                <br></br>
            
                Reddit - r/place 
                <img src= {`${process.env.PUBLIC_URL}//Images/rplace.jpeg`}  alt="Reference 4" style={{ width: '30%' }} />
             </p>
             <br></br>
             <p>
             <b>Algorithmic Solutions:</b>
              1. Real-Time Interaction:
                - Use event-driven programming techniques in JavaScript to handle mouse events (clicks, drags) and update the canvas in response.<br></br>
                - Employ techniques like debouncing or throttling to control the frequency of updates and prevent performance bottlenecks.<br></br>
<br></br>
              2. Color Generation:
                - Implement algorithms to generate random colors within predefined ranges for hue, saturation, and brightness, ensuring a diverse yet cohesive color palette.<br></br>
                - Incorporate color theory principles (e.g., complementary colors, analogous colors) to guide the generation process and create visually pleasing combinations.<br></br>
<br></br>
             3.Undo/Redo Functionality:
                - Maintain a stack-based data structure to store drawing actions (e.g., strokes, color changes) in chronological order.<br></br>
                - Implement functions to push new actions onto the undo stack and pop them off for redo operations, while ensuring consistency between the canvas state and the action history.<br></br>
<br></br>
             4. Optimization:
                - Employ caching mechanisms to store intermediate canvas states and avoid redundant calculations during rendering.<br></br>
                - Utilize hardware-accelerated features of modern web browsers (e.g., WebGL) for faster rendering of complex graphics operations.<br></br>
<br></br>
             By addressing these technical concerns and implementing appropriate algorithmic solutions, the "Dynamic Color Canvas" project can
             deliver a seamless and engaging user experience, allowing users to express their creativity freely while maintaining optimal 
             performance and responsiveness.
             </p>
        </p>
      </div>,
    },
    {
      id: 3,
      title: "Reflection",
      thumbnail: "/Images/MultiFace1.jpeg",
      content: 
      <div>
        <p>
        <b>Reflection on Learning React.js</b><br></br>
        Learning React.js has been a transformative journey for me. Initially, I found the concept of component-based architecture both intriguing and challenging. 
        React's declarative approach to building user interfaces allowed me to break down complex UI elements into reusable components, which streamlined my development process. 
        I challenged myself to dive deeper into state management with React hooks and context. This exploration enabled me to manage complex state logic efficiently and maintain 
        a clean and organized codebase. By experimenting with various projects, I pushed the boundaries of my understanding, implementing React in new and creative ways, such as 
        building interactive web applications and integrating real-time data updates using WebSockets. Each project presented unique challenges, which I approached with determination 
        and a problem-solving mindset, further solidifying my React.js skills.
        <br></br>
        <p>
         <b>Experience with Coding a Beauty E-commerce Website</b><br></br>
            Developing a beauty e-commerce website was both an exciting and educational experience. I was tasked with creating a visually appealing, user-friendly interface that effectively 
            showcased a wide range of beauty products. Utilizing React.js, I built a dynamic and responsive front-end that provided users with a seamless shopping experience. Integrating various 
            APIs for product listings, reviews, and payment processing was a complex task that required meticulous planning and execution. I encountered several challenges, such as optimizing the 
            website for performance and ensuring cross-browser compatibility. Through persistent debugging and optimization, I managed to enhance the website's functionality and user experience. 
            This project not only honed my technical skills but also taught me valuable lessons in project management, teamwork, and the importance of a user-centric design approach.
        </p>
        <br></br>
        <p>
         <b>Anticipation for Creating Internet Art</b><br></br>
          My decision to create internet art stems from a desire to merge my passion for coding with my love for creative expression. I want to explore the intersection of technology and art, 
          pushing the boundaries of what can be achieved through digital media. The idea of "Dynamic Color Canvas" emerged from this intersection, inspired by the spontaneity of traditional 
          painting and the limitless possibilities of digital tools. By leveraging my knowledge of web development, I aim to create an interactive platform that encourages users to explore their 
          creativity in a playful and accessible manner. This upcoming project will allow me to experiment with new techniques and technologies, challenging myself to think outside the box and 
          create something unique. I am excited about the potential of combining art and technology to inspire and engage users in innovative ways.
        </p>
        </p>
      </div>,
    },
  ]);

  // State to keep track of selected blog and its content visibility
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showContent, setShowContent] = useState(false);

  // Function to handle selecting a blog
  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
    setShowContent(true); // Show content by default when a blog is selected
  };

  // Function to toggle the visibility of full blog content
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {blogs.map((blog) => (
              <BlogThumbnail
                key={blog.id}
                title={blog.title}
                thumbnail={blog.thumbnail}
                onClick={() => handleSelectBlog(blog)}
              />
            ))}
          </div>
        </div>
        <div style={{ flex: 3 }}>
          {selectedBlog && (
            <FullBlog
              title={selectedBlog.title}
              content={selectedBlog.content}
              showContent={showContent}
              toggleContent={toggleContent}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
