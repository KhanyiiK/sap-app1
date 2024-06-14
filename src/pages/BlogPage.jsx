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
          width: "50%", // Adjusted to fit container width
          height: "auto",
          objectFit: "cover",
          borderRadius: "5px",
          marginTop: "10px", // Margin at the top
        }}
      />
      <h3 style={{ marginTop: "5px" }}>{title}</h3>
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
      thumbnail: `${process.env.PUBLIC_URL}/Images/Crit.png`,
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
      thumbnail:  `${process.env.PUBLIC_URL}/Images/Net.png`,
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
      thumbnail:  `${process.env.PUBLIC_URL}/Images/Ref.png`,
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
    {
      id: 4,
      title: "Blog Post Week 4",
      thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
      content: 
      <div>
        <p>
          <b>Week 4: Dev Blog</b><br></br>
          This week has been a dynamic blend of theory, practical application, and creative brainstorming. As we delve deeper into developing our web applications and internet artwork, I find myself continuously engaged and challenged by the process.
          <br></br>
          <b>Revision Videos:</b> The revision videos this week, focusing on interaction and the WWW, were particularly insightful. They emphasized the importance of intuitive design and user interaction, reinforcing the need to keep the end-user in mind throughout development.
          <br></br>
          <b>Technical Questions:</b> I’ve been exploring state management in ReactJS, specifically the useState and useReducer methods. Implementing state management efficiently is more complex than anticipated. If anyone has tips on managing state in larger applications, I’d love to hear your experiences.
          <br></br>
          <b>Brainstorming and Research for Internet Artwork:</b> Inspired by Mailloux’s “Convention and Context” and discussions on conceptualizing web applications, I’m brainstorming an artwork that evolves based on user interaction. For example, a dynamic visual representation that changes according to user inputs like mouse movement or clicks, or even external data sources like weather APIs.
          <br></br>
          <b>Thoughts on Internet/Web/Net Art:</b> Internet art has evolved from simple web pages to complex, interactive experiences. The web is a unique canvas that is both accessible and mutable, allowing artists to reach a global audience and continuously update their work. This fluidity is something I want to incorporate into my project, ensuring it feels alive and responsive rather than static.
          <br></br>
          <b>Theory Work:</b> This week’s theoretical readings have been enriching. Mailloux’s article on “Convention and Context” provided a deep dive into how context shapes understanding, which is directly applicable to web design. User context—such as device, location, and time of day—can dramatically alter the user experience. Considering these variables is essential for creating personalized and effective interactions.
          <br></br>
          <b>Practical Work:</b> The in-class exercises focusing on ReactJS have been immensely helpful. The hands-on approach is the best way for me to internalize these concepts. Building small projects and solving exercises related to state management, lifecycle methods, and routing has given me a clearer understanding of how to structure my application. I’m now more confident in using React to build a responsive and interactive web application.
          <br></br>
          Week 4 has been a blend of theoretical insights and practical challenges. The ongoing engagement with both the academic and technical aspects of web development is proving to be a rewarding experience. As I move forward, I’m excited to continue refining my project, integrating feedback from peers, and experimenting with new ideas. The journey from concept to execution is becoming clearer, and I’m eager to see where it leads.
        </p>
      </div>,
    },
    {
      id: 5,
title: "Blog Post Week 3",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 3: Dev Blog</b><br></br>
    This week was a deeper dive into React and an exploration of web art. The combination of theory and practical exercises provided a comprehensive understanding of both topics.
    <br></br>
    <b>Internet/Web Art Lecture:</b> The recorded lecture on Internet/Web Art was enlightening. It covered the evolution of web art, highlighting how artists have used the internet as a medium for creativity. The discussion on the importance of web standards was particularly eye-opening, emphasizing how standards ensure accessibility and consistency across different browsers and devices.
    <br></br>
    <b>ReactJS:</b> During our in-person classes, we delved into React concepts such as JSX, components, props, and conditional rendering. These foundational elements play a crucial role in building web applications. The practical exercises helped reinforce these concepts and improve my comprehension. I found conditional rendering particularly fascinating as it enhances interactivity and user engagement in applications. Despite the organized learning approach, I faced challenges. Initially, grasping JSX proved tricky due to its blend of HTML and JavaScript syntax. While components offer modularity and reusability, careful structuring is necessary to avoid prop drilling—a scenario where props are passed through levels of component nesting. This challenge escalates with the complexity of the component hierarchy. Dealing with props presented another hurdle. Although vital for data transfer between components, managing props across components can be cumbersome. Distinguishing between props and state further complicates matters. It's crucial to keep components stateless whenever possible to maintain clarity and simplicity. Mastering rendering demanded an understanding of JavaScript logic. Correctly implementing conditions to dynamically update the UI without re-renders proved challenging yet rewarding when done right. Mishandling this aspect could result in performance issues or unexpected UI behavior.
    <br></br>
    <b>Technical Exercises:</b> The practical exercises were invaluable for applying theoretical knowledge. Building small projects using JSX, components, and props helped me understand how to structure a React application efficiently. Working through conditional rendering scenarios demonstrated how to create applications that respond dynamically to user input.
    <br></br>
    <b>Why We Focus on Web Standards:</b> The material on web standards stressed their importance in web development. Standards ensure that web applications are accessible to all users, regardless of their browser or device. This focus on inclusivity and consistency is crucial for creating web applications that provide a seamless user experience.
    <br></br>
    Week 3 was a productive blend of theory and practice. The lectures on web art and the emphasis on web standards provided a strong theoretical foundation. The practical ReactJS exercises helped translate this theory into tangible skills. As I continue developing my project, these insights will be instrumental in creating an accessible, dynamic web application. I'm looking forward to building on this knowledge in the coming weeks.
  </p>
</div>,
    },
    {
      id: 6,
      title: "Blog Post Week 5",
      thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
      content: 
      <div>
        <p>
          <b>Week 5: Dev Blog</b><br></br>
          This week continued our deep dive into React, focusing on context management, and also explored the history and development of the field of web development. The blend of theoretical insights and practical exercises has been both challenging and enriching.
          <br></br>
          <b>History and Development of the Field:</b> The readings this week provided a comprehensive overview of internet art and its impact on traditional art forms. Dean's article "What Is 'Internet Art'? Here Are 10 Masterpieces To Know" (2019) highlights significant works that define the genre, emphasizing how the internet has become a medium for creativity. Ricci's "Net Art and How The Internet Has Created A New Medium" (2020) further explores the evolution of net art, showing how the internet has opened new avenues for artistic expression. The impact of internet art on traditional art is explored in O’Toole’s "The New Museum Hits 'Save' on Net Art" (2019), which discusses how institutions are preserving digital works. The ICA/Boston’s (2018) article on the exhibition examining the internet's impact on visual art illustrates how the internet is reshaping the art world, influencing both the creation and curation of artworks.
          <br></br>
          <b>ReactJS:</b>
          <br></br>
          <b>Context Management:</b> In-class sessions this week focused on context management in React. Context management is crucial for managing state across different parts of an application without prop drilling. This method simplifies the process of passing data through the component tree, making the application more efficient and easier to maintain. Understanding how to create and use context was initially challenging, as it involves a shift from the more straightforward prop drilling method. However, the benefits of a cleaner and more scalable codebase became apparent as we progressed through the exercises. Despite its advantages, context management comes with its own set of challenges. Creating a context requires setting up a context provider, which can add complexity to the application’s structure. Additionally, improper use of context can lead to performance issues, such as unnecessary re-renders when the context value changes. It’s crucial to use context judiciously and understand when it’s appropriate to use it versus other state management solutions like Redux.
          <br></br>
          <b>GitHub: React App Push and Deployment:</b> This week, we also covered pushing React apps to GitHub and deploying them. Understanding the deployment process is essential for making our applications accessible to users. The steps involved in pushing code to GitHub, setting up a repository, and deploying the app required meticulous attention to detail. Learning how to resolve common deployment issues, such as build errors or incorrect configurations, was an invaluable part of the process.
          <br></br>
          <b>Technical Exercises:</b> The practical exercises on context management were particularly beneficial. They provided hands-on experience in setting up context providers, consuming context in different components, and understanding how to manage global state effectively. These exercises reinforced the theoretical concepts and helped me become more comfortable with using context in real-world applications.
          <br></br>
          Week 5 has been a significant step forward in both understanding the historical context of web development and mastering advanced React concepts. The historical readings provided valuable insights into the evolution of the field, while the focus on context management and deployment has equipped me with essential skills for building and deploying modern web applications. Overcoming the challenges associated with context management has been rewarding, and I feel more confident in applying these techniques to my projects. I’m excited to continue refining my skills and integrating these concepts into my work in the coming weeks.
        </p>
      </div>,
      },
      {
        id: 7,
title: "Blog Post Week 6",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 6: Dev Blog</b><br></br>
    This week marked the final part of our React series, with a focus on integrating CSS into our React applications. Additionally, we explored the concept of CodeArt. Despite the public holiday, which meant no formal classes, the week was still productive with continued work on React exercises and ongoing challenges.
    <br></br>
    <b>Continuing Previous Week’s Struggles:</b> Continuing from last week, I faced similar challenges with context management and deployment. The intricacies of context providers and managing state across the application remained complex. However, persistence is paying off, as repeated practice is gradually making these concepts clearer. Deploying applications also continued to pose issues, particularly with ensuring the correct configurations and resolving build errors. Each deployment attempt, though sometimes frustrating, is a learning experience that builds my troubleshooting skills.
    <br></br>
    <b>Theory:</b> While there were no specific theory readings assigned this week, the concept of CodeArt was introduced. CodeArt blends programming and artistic expression, using code as a medium to create art. This concept is fascinating as it aligns with the evolving nature of internet art, where technology and creativity intersect.
    <br></br>
    <b>ReactJS:</b>
    <br></br>
    <b>CSS Integration:</b> This week’s React exercises focused on integrating CSS into our applications. Styling React components efficiently is essential for creating visually appealing and user-friendly applications. We explored various methods, including inline styles, CSS modules, and styled-components. Each method has its pros and cons, and understanding when to use each is crucial for maintaining clean and manageable code. Integrating CSS into React brought its own set of challenges. Inline styles, while convenient for dynamic styling, can become unwieldy and difficult to maintain in larger applications. CSS modules offer better modularity and prevent style conflicts, but they require a different approach to organizing styles. Styled-components provide a powerful way to style components with JavaScript, but they introduce a new layer of complexity. Balancing these methods and choosing the right approach for different scenarios was a key learning point.
    <br></br>
    <b>Technical Exercises:</b> The practical exercises on CSS integration were beneficial. They provided hands-on experience in applying different styling techniques within React. Experimenting with inline styles, CSS modules, and styled-components helped solidify my understanding of each method's advantages and limitations. These exercises also reinforced the importance of maintaining a consistent and organized styling approach to enhance the overall user experience.
    <br></br>
    Week 6 was a blend of consolidating previous learnings and tackling new challenges with CSS integration. The ongoing struggles with context management and deployment highlighted the importance of persistence and continuous learning. The introduction of CodeArt opened new avenues for creative expression using code, aligning with the broader themes of internet art. As we move forward, I’m eager to apply these insights to my projects, continuing to refine my skills and embrace the intersection of technology and creativity.
  </p>
</div>,
      },
      {
        id: 8,
title: "Blog Post Week 7",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 7: Dev Blog</b><br></br>
    This week was a bit different, as it coincided with our mid-semester break. Despite the break, we had a technical exercise focusing on creating an e-commerce application using React. This was a practical and intensive task, providing a great opportunity to apply what we’ve learned so far in a real-world scenario.
    <br></br>
    <b>ReactJS: E-commerce Exercise:</b> The e-commerce exercise was a comprehensive project that required integrating various React concepts we've covered over the past weeks. This exercise encompassed creating a fully functional e-commerce application, complete with product listings, a shopping cart, and user interactions.
    <br></br>
    <b>Key Components of the Exercise:</b>
    <br></br>
    <b>1. Product Listings:</b>
    <ul>
      <li>Creating a dynamic product listing page using React components.</li>
      <li>Implementing state management to handle product data.</li>
    </ul>
    <b>2. Shopping Cart:</b>
    <ul>
      <li>Building a shopping cart component that updates as users add or remove products.</li>
      <li>Managing the state of the cart using context to ensure data consistency across the application.</li>
    </ul>
    <b>3. User Interactions:</b>
    <ul>
      <li>Adding features like quantity adjustments and removing items from the cart.</li>
      <li>Using conditional rendering to update the UI based on user actions.</li>
    </ul>
    <br></br>
    <b>Challenges Faced:</b>
    <br></br>
    <b>1. State Management:</b>
    <ul>
      <li>Managing state across the application was challenging, particularly ensuring that the cart state remained consistent. Using context for global state management was essential, but it required careful planning to avoid unnecessary re-renders and performance issues.</li>
    </ul>
    <b>2. CSS Integration:</b>
    <ul>
      <li>Styling the application to make it visually appealing and user-friendly involved integrating CSS effectively. Balancing between inline styles, CSS modules, and styled-components was crucial to maintain a clean and manageable codebase.</li>
    </ul>
    <b>3. Handling User Actions:</b>
    <ul>
      <li>Implementing features like adding items to the cart, adjusting quantities, and removing items involved complex logic. Ensuring that these actions were handled efficiently and that the UI updated correctly was a significant challenge.</li>
    </ul>
    <br></br>
    <b>Technical Learning:</b> This exercise was invaluable in solidifying my understanding of React’s core concepts in a practical setting. It provided hands-on experience with state management, context, and component design, all critical skills for building complex applications. Working through these challenges helped deepen my knowledge and improve my problem-solving skills.
  </p>
</div>,
      },
      {
        id: 9,
title: "Blog Post Week 8",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 8: Dev Blog</b><br></br>
    This week was a pivotal blend of theory and practical application, focusing on completing a comprehensive e-commerce example in React and exploring Interaction Design (IxD) principles for the web.
    <br></br>
    <b>Theory:</b>
    <br></br>
    <b>The Basic Principles of User Interface Design:</b> We delved into the foundational principles of User Interface (UI) design, exploring concepts like simplicity, consistency, and feedback. Understanding these principles is crucial for creating intuitive and user-friendly web applications.
    <br></br>
    <b>What is Design by Papanek (1984):</b> Papanek's seminal work provided a broader perspective on design, emphasizing its impact on society and the environment. This reading encouraged us to consider the ethical implications of our design decisions and the importance of designing with purpose and responsibility.
    <br></br>
    <b>Alternative Approaches to Interface Technology by Gibson (2004):</b> Gibson's article introduced alternative approaches to interface technology, challenging traditional notions of user interaction. Exploring these alternative perspectives broadened our understanding of interface design and encouraged creative thinking in our development process.
    <br></br>
    <b>Technical:</b>
    <br></br>
    <b>ReactJS - E-commerce Application Exercise Walk-through:</b> The in-class session featured a detailed walk-through of the e-commerce application exercise. This session provided practical insights into structuring React components, managing state effectively, and handling user interactions in a complex application.
    <br></br>
    <b>ReactJS - E-commerce Code Solution:</b> We examined the complete code solution for the e-commerce application, reinforcing best practices and design patterns in React development. This analysis helped solidify our understanding of React concepts and provided valuable insights into optimizing code for performance and maintainability.
    <br></br>
    <b>Key Learning Points:</b>
    <ul>
      <li><b>User-Centered Design:</b> Understanding the basic principles of UI design and incorporating user feedback to create intuitive and engaging web experiences.</li>
      <li><b>Ethical Design Practices:</b> Considering the broader societal and environmental impacts of design decisions, as highlighted by Papanek's work, and striving to design with purpose and responsibility.</li>
      <li><b>Innovative Interface Technology:</b> Exploring alternative approaches to interface technology, as suggested by Gibson, to encourage creative thinking and innovation in our design process.</li>
    </ul>
    <br></br>
    <b>Challenges:</b>
    <ul>
      <li><b>Complex State Management:</b> Navigating complex state management challenges in React, particularly in applications with multiple components and user interactions.</li>
      <li><b>Design Consistency:</b> Ensuring consistency in design elements and user interactions throughout the application to provide a cohesive user experience.</li>
      <li><b>Optimizing Performance:</b> Identifying and addressing performance bottlenecks to ensure a smooth and responsive user experience, especially in large-scale applications.</li>
    </ul>
  </p>
</div>,
      },
      {
        id: 10,
title: "Blog Post Week 9",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 9: Dev Blog</b><br></br>
    This week's focus shifted towards the significance of coding practices and the impact they have beyond mere functionality. Exploring critical code literacies illuminated the broader implications of coding beyond technical proficiency.
    <br></br>
    <b>Theory:</b>
    <br></br>
    <b>Recorded Lecture: How We Code Matters:</b> The recorded lecture delved into the concept of "How We Code Matters," emphasizing the broader implications of coding practices beyond their technical functionality. Understanding the social, cultural, and ethical dimensions of coding is essential for responsible and effective software development.
    <br></br>
    <b>Introducing Critical Code Literacies:</b> The introduction to critical code literacies expanded upon the notion that coding is not just about writing functional code but also about understanding the broader societal implications of our code. It highlighted the importance of critical thinking and awareness in coding practices, encouraging developers to consider the ethical, cultural, and political aspects of their work.
    <br></br>
    <b>Key Takeaways:</b>
    <ul>
      <li><b>Social Responsibility:</b> Recognizing the social responsibility inherent in coding and understanding the potential impact of our code on individuals and society at large.</li>
      <li><b>Ethical Considerations:</b> Considering the ethical implications of coding decisions, including issues such as data privacy, algorithmic bias, and accessibility.</li>
      <li><b>Cultural Sensitivity:</b> Acknowledging the cultural context in which our code operates and ensuring that our software is inclusive and respectful of diverse perspectives and backgrounds.</li>
    </ul>
    <br></br>
    <b>Practical Application:</b> In addition to theoretical discussions, this week provided an opportunity to reflect on our coding practices and consider how we can incorporate critical code literacies into our development workflow. This involves not only writing clean and efficient code but also considering the broader implications of our code on society and the environment.
    <br></br>
    <b>Challenges:</b>
    <ul>
      <li><b>Awareness and Education:</b> One of the primary challenges is raising awareness and educating developers about the importance of critical code literacies. It requires a shift in mindset from purely technical proficiency to a more holistic understanding of coding's impact.</li>
      <li><b>Implementation in Practice:</b> Integrating critical code literacies into everyday coding practices can be challenging, especially in fast-paced development environments where the focus is often on meeting deadlines and delivering functionality. Finding ways to prioritize ethical considerations alongside technical requirements is crucial.</li>
      <li><b>Collaboration and Dialogue:</b> Encouraging open dialogue and collaboration among developers, designers, and other stakeholders can help foster a culture of responsible coding practices. By engaging in discussions about the social and ethical implications of our code, we can collectively work towards more inclusive and sustainable software development practices.</li>
    </ul>
  </p>
</div>,
      },
      {
        id: 11,
title: "Blog Post Week 10",
thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 10: Dev Blog</b><br></br>
    This week immersed us in the realm of CodeArt, exploring the intersection of coding and artistic expression. Delving into the concept of CodeArt and its application in DevArt shed light on the creative potential of coding beyond functional applications.
    <br></br>
    <b>Theory:</b>
    <br></br>
    <b>CodeArt / DevArt:</b> The exploration of CodeArt and DevArt introduced us to the concept of using code as a medium for artistic expression. This form of creative coding transcends traditional boundaries, blending programming with art to create interactive and visually captivating experiences.
    <br></br>
    <b>Code, Art?... in JavaScript:</b> The discussion on CodeArt in JavaScript delved deeper into the creative possibilities offered by JavaScript as a programming language. From generative art to interactive installations, JavaScript provides a versatile platform for artists to express their creativity through code.
    <br></br>
    <b>Key Concepts:</b>
    <ul>
      <li><b>Creative Coding:</b> Understanding the concept of creative coding and its role in bridging the gap between art and technology. Creative coding empowers artists to use code as a tool for self-expression and exploration.</li>
      <li><b>Interactivity and Engagement:</b> Recognizing the potential of interactive experiences in CodeArt to engage audiences in new and innovative ways. Interactive installations and web-based artworks invite viewers to actively participate and become part of the artistic experience.</li>
      <li><b>Exploration and Experimentation:</b> Encouraging experimentation and exploration in CodeArt, embracing the iterative nature of coding as a creative process. Trying out new techniques and pushing the boundaries of what is possible with code fosters innovation and growth as an artist.</li>
    </ul>
    <br></br>
    <b>Practical Application:</b> This week provided an opportunity to experiment with CodeArt firsthand, exploring JavaScript libraries and frameworks for creative coding projects. From visualizing data to creating interactive animations, the possibilities were endless, allowing us to unleash our creativity and push the limits of what we could achieve with code.
    <br></br>
    <b>Challenges:</b>
    <ul>
      <li><b>Technical Proficiency:</b> Developing proficiency in creative coding techniques and mastering JavaScript libraries and frameworks requires time and practice. Overcoming technical challenges and honing our coding skills is essential for realizing our artistic vision.</li>
      <li><b>Conceptualization and Design:</b> Translating artistic concepts into code presents its own set of challenges, requiring a deep understanding of both artistic principles and programming fundamentals. Finding the right balance between form and function is crucial for creating compelling CodeArt pieces.</li>
      <li><b>Accessibility and Inclusivity:</b> Ensuring that CodeArt projects are accessible and inclusive to all audiences is paramount. Considering factors such as usability, performance, and device compatibility helps to create artworks that can be enjoyed by a diverse range of viewers.</li>
    </ul>
    <br></br>
    Week 10 immersed us in the exciting world of CodeArt, exploring the creative potential of coding as a medium for artistic expression. From interactive installations to web-based artworks, CodeArt offers endless possibilities for innovation and exploration. As we continue to experiment with creative coding techniques, we are excited to push the boundaries of what is possible with code and create meaningful and impactful CodeArt pieces.
  </p>
</div>,
      },
      {
        id: 12,
title: "Blog Post Week 11",
thumbnail:`${process.env.PUBLIC_URL}/Images/BlogPost.png`,
content: 
<div>
  <p>
    <b>Week 11: Dev Blog: Reflection and Planning</b><br></br>
    As I embark on the journey of creating my skincare and beauty e-commerce website, I find myself immersed in a world of pastel colors, clean imagery, and the promise of easy navigation. This week, I delve into the planning phase, laying the groundwork for what promises to be a visually stunning and user-friendly platform for beauty enthusiasts.
    <br></br>
    <b>Reflecting on the Vision:</b> The vision for my website revolves around creating a serene and inviting atmosphere where visitors can explore an array of skincare and beauty products with ease. Pastel colors evoke a sense of calm and elegance, perfectly complementing the clean imagery that will showcase our products in their best light.
    <br></br>
    <b>Planning the Content and Structure:</b> With the project requirements in mind, I meticulously plan the content and structure of the website. Each product category will be thoughtfully organized, ensuring a seamless browsing experience for visitors. From cleansers to moisturizers, every skincare essential will have its dedicated space, making it effortless for customers to find what they need.
    <br></br>
    <b>Designing the Experience:</b> Wireframing each page of the website allows me to visualize the layout and flow of information. The homepage will welcome visitors with a soft color palette and striking imagery, enticing them to explore further. The design section will feature product highlights and recommendations, while the theory section will provide valuable skincare tips and insights. The Internet Art pages will serve as a creative showcase, adding an element of whimsy and charm to the overall experience.
    <br></br>
    <b>Setting Up the Development Environment:</b> Installing the React project template sets the stage for bringing my vision to life. Establishing a GitHub repository for version control ensures that my progress is saved and documented every step of the way. As I practice pushing and deploying the application, I feel a sense of excitement and anticipation for what's to come.
    <br></br>
    <b>Developing the Website:</b> With the basic project structure in place, I begin fleshing out the website, one component at a time. The router facilitates seamless navigation, while state management ensures a smooth and responsive user experience. Committing changes regularly to GitHub allows me to track my progress and iterate as needed.
    <br></br>
    <b>Adding Interactivity and Functionality:</b> Interactive elements such as product galleries and filtering options enhance the browsing experience, making it easy for customers to discover new favorites. Testing functionality across different devices and browsers ensures that the website performs flawlessly, no matter how visitors choose to access it.
    <br></br>
    <b>Preparing for Internet Artwork Integration:</b> As I outline the preparatory work for integrating Internet Artwork, I'm inspired by the opportunity to infuse creativity into every aspect of the website. From concept to execution, I envision a seamless blend of art and technology that will captivate and delight visitors.
    <br></br>
    <b>Finalizing and Reviewing:</b> Thorough testing and review ensure that the website meets all aesthetic, functional, and technical requirements. From usability testing to bug fixing, I leave no stone unturned in my quest for perfection.
    <br></br>
    <b>Deployment and Documentation:</b> With the website fully functional and free of critical bugs, I deploy it to GitHub Pages, eager to share it with the world. Documentation of the design and development process, along with UI/UX decisions, provides valuable insights for future iterations and improvements.
    <br></br>
    <b>Reflection and Continuous Improvement:</b> As I reflect on the journey thus far, I'm filled with a sense of pride and accomplishment. Yet, I know that this is just the beginning. Continuous improvement is key, and I look forward to expanding and refining the website in the days and weeks to come, always striving to create a seamless and delightful experience for our customers.
  </p>
</div>,
      },
      {
        id: 13,
        title: "Week 12: Dev Blog",
        thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
        content: 
          <div>
            <p>
              <b>Week 12: Dev Blog: Exploring AI and Art</b>
              <br />
              This week, the intersection of artificial intelligence (AI) and art takes center stage, offering a fascinating glimpse into the evolving relationship between technology and creativity. As I delve into the theoretical and technical aspects of AI in art, I'm intrigued by the possibilities and implications of this emerging field.
            </p>
            <p>
              <b>Exploring the Theoretical Landscape:</b> Diving into the readings, I encounter a rich tapestry of perspectives on AI's role in artistic creation. Audry and Ippolito's article prompts me to ponder whether AI can truly produce art independently of human input, raising thought-provoking questions about the viewer's role in the creative process. Broeckmann's exploration of the machine as an artist as myth challenges conventional notions of creativity, inviting me to reconsider the boundaries between human and machine-generated art.
            </p>
            <p>
              <b>Technical Insights into AI Art:</b> In the technical session, I engage in a UI/UX walkthrough focused on AI and art, gaining practical insights into designing user interfaces that facilitate interaction with AI-generated artworks. This hands-on experience deepens my understanding of how AI can be integrated into artistic practice to enhance user engagement and creativity.
            </p>
            <p>
              <b>Key Readings:</b> The readings provide a comprehensive overview of AI's impact on art, from the potential of artificial general intelligence to the ethical considerations surrounding computational creativity. Mazzone and Elgammal's exploration of AI's potential in fostering creativity inspires me to explore new avenues of artistic expression, while Peng's examination of AI and copyright prompts me to consider the legal and ethical implications of AI-generated art.
            </p>
            <p>
              <b>Reflecting on the Future:</b> As I reflect on the implications of AI in art, I'm struck by the transformative potential of this technology to revolutionize the creative process. While AI offers exciting opportunities for innovation and experimentation, it also raises complex questions about authorship, originality, and the nature of artistic expression. Pruijt's analysis of social interaction with computers reminds me of the importance of human involvement in shaping AI's creative output, emphasizing the symbiotic relationship between humans and machines in the artistic process.
            </p>
            <p>
              <b>Moving Forward:</b> As I delve deeper into the fascinating intersection of AI and art, I'm eager to explore how this technology can enrich my own creative practice. By embracing AI as a tool for experimentation and collaboration, I hope to push the boundaries of traditional artistic mediums and forge new pathways for expression. With each new insight gained, I'm excited to embark on this journey of exploration and discovery, navigating the evolving landscape of AI art with curiosity and imagination.
            </p>
          </div>
      },
      {
        id: 14,
        title: "Week 13: Dev Blog: Exploring Ethnocomputing and Digital Art",
        thumbnail: `${process.env.PUBLIC_URL}/Images/BlogPost.png`,
        content: 
          <div>
            <p>
              <b>Week 13: Dev Blog: Exploring Ethnocomputing and Digital Art</b>
              <br />
              This week delves into the fascinating realms of ethnocomputing and digital art, offering insights into the intersection of technology, culture, and artistic expression. As I navigate through the theoretical discussions and practical applications of these concepts, I'm captivated by the rich diversity and innovative potential they present.
            </p>
            <p>
              <b>Exploring African Digital Art:</b> Immersing myself in the world of African digital art opens up a realm of creativity and cultural exploration. Bisschoff's introduction to African digital arts provides a compelling overview, highlighting the dynamic fusion of traditional aesthetics with contemporary digital mediums. Pijnaker and Spronk's exploration of digital technologies in Ghanaian games and comics offers valuable insights into the role of technology in shaping cultural narratives and expressions.
            </p>
            <p>
              <b>Understanding Ethnocomputing:</b> The concept of ethnocomputing sheds light on the intricate relationship between technology and cultural practices. From indigenous algorithms to culturally situated design tools, the readings by Babbitt et al. and Eglash et al. offer thought-provoking perspectives on how technology can be harnessed to preserve and celebrate cultural heritage. Tedre et al.'s exploration of ICT in cultural and social contexts further deepens my understanding of the transformative power of technology in diverse communities.
            </p>
            <p>
              <b>Bridging Cultures Through Digital Art:</b> As I reflect on the potential of digital art to bridge cultures and amplify diverse voices, Lameman and Lewis' work on designing games with First Nations youth resonates deeply. Their emphasis on empowering indigenous communities through creative expression serves as a powerful reminder of the transformative impact of art and technology on cultural identity and empowerment.
            </p>
            <p>
              <b>Challenges and Opportunities:</b> While the fusion of ethnocomputing and digital art presents exciting opportunities for innovation and cultural exchange, it also poses challenges. Bishop's critique of digital art history prompts me to question the dominant narratives and power dynamics inherent in technological innovation, urging me to approach these intersections with critical awareness and reflexivity.
            </p>
            <p>
              <b>Moving Forward:</b> As I navigate through the complexities and possibilities of ethnocomputing and digital art, I'm inspired to explore new avenues of creativity and collaboration. By embracing technology as a tool for cultural preservation, expression, and empowerment, I hope to contribute to a more inclusive and vibrant artistic landscape that celebrates the richness and diversity of human experience. With each new insight gained, I'm excited to embark on this journey of exploration and discovery, forging meaningful connections between technology, culture, and creativity.
            </p>
          </div>
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
