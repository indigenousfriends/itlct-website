# If These Lands Could Talk Website Project

## Project Description

This project is a one-pager website collaboration built by the Web-Dev Cohort-1 mentees of the Indigenous Friends Association's ‘IndigiTECH’ program. It was built for the non-profit organization ‘If These Lands Could Talk’ which supports Indigenous communities through allyship and digital stewardship.

## Motivation

The task was to create a website for informational and contact purposes that is not only reflective of their organization but is also built with accessibility and improved search engine optimization in mind.

The team was composed of Indigenous people, women, and gender-diverse persons who were excited to carve out their space in the tech industry. This was the group’s first collaborative project, and it challenged all mentees to apply the skills they learned over the course of their training program. They also had to learn brand new concepts, coding languages, and workflows to bring everything together in harmony.

While the mentees individually were at differing skill levels, working with their dedicated mentors, and helping each other push forward as a team were the keys to success. To ensure everyone could work efficiently, the technologies and frameworks used in this project were chosen based on the skill level of the mentees and for the ease of collaboration.

## Tech Stack Used

- Languages Used:
  - HTML:
    - Vanilla tech stack and prioritizing strong fundamentals in HTML
      - The implementation involved utilizing a vanilla tech stack and placing a high priority on strong fundamentals in HTML.
  - CSS:
    - Normalize: Nicolas Gallagher
      - CSS Normalize, created by Nicolas Gallagher, served as a CSS reset mechanism aimed at standardizing browser styles to enhance cross-browser consistency within the project.
    - Variables:
      - Variables were used in the CSS for streamlined control and consistency, encompassing colors, font sizes, font weights, font families, and global styles like wrapper widths.
    - Media Queries:
      - Media queries were used in the CSS with predefined breakpoints for tablet and mobile screen sizes, ensuring responsiveness to users' screen sizes. Various screen dimensions required distinct applications of flexbox, diverse wrapper widths, image widths, or content sizes, and other adjustments to optimize aesthetics and accessibility.
  - JavaScript:
    - Event Listeners:
      - Event listeners in the JavaScript were employed to track clicks and execute various actions such as performing specific tasks or triggering functions in response to user interactions.
  - Tools: WAVE Tool, Lighthouse
    - In monitoring and managing the website's accessibility, the tools utilized included the WAVE tool and the Lighthouse extension in Google Chrome. Their use ensured the adherence of the code to established accessibility standards.
  - Programs: Visual Studio Code, Github, Zoom, Figma
    - The team utilized a range of tools to bring the project to life: Visual Studio Code and Github for coding and seamless code sharing, Zoom for collaborative meetings, and Figma for crafting the intricate design of the website.

## How to Use the Project/ Design System

- Folder structure:

  - The folder structure for this project was chosen for clear organization and ease of understanding what is contained within each subject.
    - Assets:
      - Images - this folder holds the desktop sized images for the contact form, banners, and for the scrolling carousel on the top and bottom.
      - Mobile images - this folder holds the images that have been optimized for mobile devices.
    - SVG images were also used in this project and are included in their respective folders. SVGs allow a web page to load faster for the user by not needing to load photos as their computer grabs the data from the web page to see it visually. This happens by giving the computer a path to that photo,
      - Social icons - this folder holds the SVGs for the links to ITLCT social media pages
      - SVG - this folder holds the SVGs that achieve things like showing direction, closing the modal, and donating.
    - CSS:
      - This folder contains our CSS normalize, and the CSS style pages.

- Naming Conventions:
  - Kebab case in HTML and CSS
    - In the HTML and CSS, the naming convention followed was Kebab Case, employing lowercase words separated by hyphens for readability (e.g., –button-text).

`--button-text`

- Camel case in JS
  - Meanwhile, in JavaScript, Camel Case was utilized, capitalizing the first letter of each word (except the first), ensuring no spaces or punctuation between the words (e.g., myFunctionName).

`myFunctionName`

- Accessibility - This is a non-exclusive list of accessibility measures we are including:

  - All images will have alt tags
  - All of our links will be specified with semantic HTML tags, attributes, or an Aria label attribute
  - All of our navigation links will be specified by tags or an Aria label attribute
  - Accessible fonts:
    - Google font CDN - this was chosen for the ability to both maintain the style that was requested but also apply smart response settings such as having the ability to cache headers on the client side, using predefined font face rules and preloading, and using browser specific and compatible fonts.
  - Tools used to test accessibility- wave, lighthouse

- GitHub & Git Workflow: - Based on feature branches - Every individual task requires its own feature branch - For each specific task, an individual feature branch is necessary. Locally, branches are created, code is committed, then pushed to the respective branch. Afterward, a pull request is initiated for project managers' review and approval, ultimately leading to the code's merge into the main branch.

- Greenhosted: - The client requested the implementation of green hosting for the project. The website was hosted on A2 Hosting. For any assistance related to this, please contact the Project Manager, Max.

## What we learned & Challenges

### Technical Challenges

Design was one of the more frequent challenges among the mentees and often required extra research as well as support from peers, the mentors, and the facilitators. Skill challenges were also present and unique to each of the mentees.

#### Design Challenges

- In the 'Who We Are' section, a block of text featured a distinct styling with a long dash preceding its content. Implementing the blockquote element and spacing using CSS posed a challenge. To address this, a specialized class was created for the indented space. Utilizing an empty content in the class:before and applying a border produced the solid line before the blockquote. During mobile optimization, disproportionate lengths of the indent and line were observed. Consequently, prompt adjustments were made to ensure optimal readability and visual consistency across screen sizes.

- Font sizing initially caused responsiveness issues despite successful variable setups for color, font-family, and wrapper width. The reliance on fixed pixel sizes (px) for font-size and font-weight created inconsistencies across screens. Transitioning from pixel-based font sizes to relative em (rem) sizes within variables resolved this issue. This change significantly enhanced responsiveness, facilitating dynamic font adjustments, and consistent design across devices. Highlighting the significance of relative units for font sizes in responsive design, this experience emphasizes starting with rem units for font sizing variables and conducting comprehensive cross-device testing during development to prevent such issues.

- Regarding the modifications in the header and the contact section's button, challenges emerged. Specifically, the button unexpectedly resized during activation, and there was misalignment in the header warning label. Collaborating with peers and mentors helped identify unnecessary code elements causing glitches. Simplifying the code addressed these issues, ensuring functionality. Seeking assistance was crucial, emphasizing the value of timely problem-solving with team support, ultimately facilitating task completion.

- The task involved learning and implementing the concept of SVGs, enabling hover actions on social icons, and integrating a responsive header background image within a flexbox container. Through this process, insights were gained into CSS styling techniques for hover effects and interpreting SVGs for customization. In the future, the aim is to streamline these steps for quicker execution, allowing for the incorporation of more diverse options. SVGs must be included in the assets package whenever possible. Understanding how to extract SVG data from existing designs in Figma was a key takeaway from this experience.

- Styling the dropdown menu of a Contact Us form in CSS posed a challenge to create a "deselected look" when inactive. Researching non-JavaScript solutions led to adding an ID to an empty option and to the form select item. Using a color variable achieved the desired appearance.

#### Skill Challenges

- Recalling the precise placements for HTML, CSS, and JS posed challenges owing to a lapse since the initial learning phase. To fortify this comprehension, research was undertaken and thorough code error checks were conducted. CSS, in particular, presents difficulties, with struggles to apprehend elements and variables, necessitating continuous learning. The completion of a project that didn't meet expectations underscored the necessity for gradual learning via exercises and the application of acquired knowledge in subsequent projects. To circumvent unfinished projects, the objective is to deepen comprehension of coding elements and improve proficiency in utilizing Git for enhanced project management.

- The initial preview of the Figma design had some challenges as it was not the full high-fidelity design. Conflicts began to arise when applying styles with media queries. A more comprehensive plan would have helped align the perspective on the work. Feeling uncertain about the design's fidelity made it challenging to feel confident. There was a need for validation and clearer objectives, as navigating the unknown was difficult.

- Working with modals presented a challenge due to its novelty. Despite receiving information and conducting research, the time constraints left room for uncertainty regarding the depth of comprehension. There was a desire for a guided walkthrough or collaborative learning experience to solidify understanding. Moving forward, a deeper comprehension is sought, emphasizing the value of shared experiences to enhance knowledge on the subject.

- Balancing the desire to perfect the work with the need to move forward was a struggle. Despite skill development being ongoing, recognizing the validity of existing skills was important. As new developers there was a learning curve, prompting frequent self-checks for comprehension.

### Collaborative Challenges

The overall consensus of the group was that the biggest challenge with collaboration was with learning and using Git and Git-Hub.

- The challenge centered on collaborative code integration via Git. Researching effective branch management, and merging techniques improved our workflow, resulting in smoother integration and fewer conflicts. Emphasizing consistent branch naming, thorough code reviews, and clear communication, with guidance from project managers, proved essential. To prevent future challenges, setting clear guidelines for branch management from the project's start is crucial.

- Challenges generally emerged in coding CSS, JavaScript, and utilizing GitHub, demanding extensive individual research and effort. However, despite these hurdles, the project concluded with a polished website, fostering improved coding skills. This experience represents a significant milestone in the coding journey, contributing substantially to skill enhancement.

- Communication issues occasionally hindered collaboration, leaving a desire for more opportunities to work collectively and contribute more significantly.

## Credits

| **Name**                     | **Git-Hub Username** | **Portfolio Link** |
| ---------------------------- | -------------------- | ------------------ |
| **Mentees**                  |
| Charli Ballantyne            | charlisable          |
| Evaristo Ramos               | roo-tech             |
| Kyla Monture                 | KMoney               |
| Lhasa Lera                   | pineapplegravy_38202 |
| Lianna Rice                  | liannarice           |
| Miranda Saddleback           | CosmicStarfire       |
| Samantha Kelln               | samifa308            |
| Shannon Contois              | MaidenManitoba       |
| Terry Hachey-Collins         | TerryHCollins        |
| Trisha Augustine             | roguemacaroon        |
| **Project Managers/Mentors** |
| Colman Tsang                 |                      |
| Gurjeet Singh Gill           | gurjeetsingh         |
| Jean-Claude Ting             | tingjc               |
| Max Harris                   | maxharrisnet         |
| Pam Nicholas                 |
| Solivan Lau                  | SolivanLau           |

## License

This is a collaborative effort between If These Lands Could Talk (ITLCT) and Indigenous Friends Association (IFA). ITLCT owns this product through this collaboration with IFA's IndigiTECH program. Copyright &copy; ITLCT. All Rights Reserved. ITLCT is a Georgia Non-Profit Corporation.

## Acknowledgement

The mentees from IndigiTECH’s Cohort 1 express their sincere gratitude to ITLCT for offering this invaluable hands-on learning opportunity. Their steadfast support is deeply appreciated, as it has empowered us to transform newly acquired skills into concrete, applied knowledge.

The mentees also wish to express their heartfelt appreciation to the IFA, particularly acknowledging the facilitators and mentors, for cultivating an environment conducive to learning and skill development during the IndigiTECH program. This journey has not only nurtured the growth of new developers but also fostered connections, collaborations, and friendships across Turtle Island.
