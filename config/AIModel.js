
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = 'AIzaSyCsvI8aL0wPdjbcgWk61_fBPP87Qb10wbw';
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,

    // change here .... text/plain to json
    responseMimeType: "application/json",
  };
  
  
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [   
        {
            role: "user",
            parts: [
              {text: "Generate Travel Plan for Location : Delhi, India , for 2 Days and 1 Night for Family with a Moderate with a Flight details , Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price,Hotel image Url , geo coordinates, rating , descriptions and Places to visit nearby with placeName,Place Details,Place Image Url,Geo Coordinates, ticket Pricing, Time t travel each of the location for 2 days and 1 with each day plan with best time to visit in JASON format.\n"},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "## Delhi Family Trip: 2 Days & 1 Night (Moderate Budget) \n\n**Flight Details:** \n\nThis plan assumes you are flying into Delhi. Please replace with your actual departure city.\n\n* **Flight:** (Example: IndiGo, Mumbai to Delhi)\n* **Price:** (Example: ₹3,500)\n* **Booking URL:** (Example: www.goindigo.in)\n\n**Hotel Options:** \n\n**1. The LaLiT New Delhi**\n* **Address:** Barakhamba Road, Connaught Place, New Delhi\n* **Price:** ₹7,000 - ₹10,000 per night\n* **Image URL:** (Example: https://www.lalit.com/media/images/hotels/delhi/hero.jpg)\n* **Geo Coordinates:** 28.6328° N, 77.2181° E\n* **Rating:** 4.5 stars\n* **Description:** A luxury hotel with elegant rooms, multiple dining options, and a rooftop pool.  \n* **Places to visit nearby:** Connaught Place, India Gate, National Museum.\n\n**2. The Imperial, New Delhi**\n* **Address:** Janpath, New Delhi\n* **Price:** ₹8,000 - ₹12,000 per night\n* **Image URL:** (Example: https://www.theimperialindia.com/sites/default/files/styles/hero/public/2021-08/Imperial-Hero-Image-2021.jpg)\n* **Geo Coordinates:** 28.6298° N, 77.2205° E\n* **Rating:** 4.8 stars\n* **Description:** A historic hotel with opulent rooms, a charming courtyard, and an award-winning restaurant.\n* **Places to visit nearby:** Connaught Place, Parliament House, National Gallery of Modern Art.\n\n**3. The Leela Palace New Delhi**\n* **Address:** Diplomatic Enclave, Chanakyapuri, New Delhi\n* **Price:** ₹10,000 - ₹15,000 per night\n* **Image URL:** (Example: https://www.theleela.com/media/images/hotels/delhi/hero.jpg)\n* **Geo Coordinates:** 28.5807° N, 77.1964° E\n* **Rating:** 4.7 stars\n* **Description:** A luxurious hotel with spacious rooms, multiple dining options, and a spa.\n* **Places to visit nearby:**  Lotus Temple, Rashtrapati Bhavan, India Gate.\n\n**Day 1:**\n\n* **Morning (8:00 AM - 12:00 PM):**\n    * **Red Fort (Lal Qila):**  A UNESCO World Heritage site, the Red Fort is a majestic 17th-century fort with beautiful architecture and rich history.\n    * **Place Details:** A fortified palace built by Mughal emperor Shah Jahan.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Red_Fort_Delhi_India.jpg/1280px-Red_Fort_Delhi_India.jpg)\n    * **Geo Coordinates:** 28.6561° N, 77.2399° E\n    * **Ticket Pricing:** ₹50 per person\n    * **Time to Travel:** 30 minutes from Connaught Place.\n\n* **Afternoon (12:00 PM - 2:00 PM):**\n    * **Lunch at Paranthe Wali Gali (Old Delhi):**  A famous street food destination with delicious parathas (stuffed flatbreads) and other traditional dishes.\n    * **Place Details:** A narrow lane with numerous shops selling parathas. \n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chandni_Chowk_Delhi_India.jpg/1280px-Chandni_Chowk_Delhi_India.jpg)\n    * **Geo Coordinates:** 28.6528° N, 77.2330° E\n    * **Time to Travel:** 45 minutes from Red Fort.\n\n* **Evening (2:00 PM - 5:00 PM):**\n    * **Jama Masjid:**  The largest mosque in India, Jama Masjid is a beautiful example of Mughal architecture with intricate details.\n    * **Place Details:**  A historic mosque built by Mughal emperor Shah Jahan.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Jama_Masjid_Delhi_India.jpg/1280px-Jama_Masjid_Delhi_India.jpg)\n    * **Geo Coordinates:** 28.6535° N, 77.2343° E\n    * **Time to Travel:** 15 minutes from Paranthe Wali Gali. \n\n* **Evening (5:00 PM - 7:00 PM):** \n    * **Humayun's Tomb:**  A beautiful Mughal garden tomb, Humayun's Tomb is a UNESCO World Heritage site with stunning architecture.\n    * **Place Details:**  The tomb of Mughal emperor Humayun.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Humayun%27s_Tomb.jpg/1280px-Humayun%27s_Tomb.jpg)\n    * **Geo Coordinates:** 28.6127° N, 77.2307° E\n    * **Ticket Pricing:** ₹30 per person\n    * **Time to Travel:** 45 minutes from Jama Masjid.\n\n* **Night (7:00 PM - 9:00 PM):**\n    * **Dinner at Theobroma:**  A popular bakery chain with delicious pastries, cakes, and sandwiches.\n    * **Place Details:** A cafe chain with multiple locations.\n    * **Time to Travel:** 30 minutes from Humayun's Tomb. \n\n**Day 2:**\n\n* **Morning (8:00 AM - 11:00 AM):**\n    * **Qutub Minar:**  A UNESCO World Heritage site, the Qutub Minar is a towering minaret made of red sandstone and is a symbol of Delhi.\n    * **Place Details:**  A 12th-century minaret, the tallest brick minaret in the world.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Qutub_Minar_India_by_Dineshkanta_02.jpg/1280px-Qutub_Minar_India_by_Dineshkanta_02.jpg)\n    * **Geo Coordinates:** 28.5840° N, 77.1732° E\n    * **Ticket Pricing:** ₹50 per person\n    * **Time to Travel:** 45 minutes from Connaught Place.\n\n* **Afternoon (11:00 AM - 1:00 PM):**\n    * **Lunch at The Dhaba (Connaught Place):** A popular eatery serving North Indian and Mughlai cuisine. \n    * **Place Details:** A restaurant with multiple locations.\n    * **Time to Travel:** 30 minutes from Qutub Minar. \n\n* **Afternoon (1:00 PM - 4:00 PM):**\n    * **India Gate:**  A war memorial built in honor of Indian soldiers who died in World War I, India Gate is a stunning monument with a beautiful garden. \n    * **Place Details:** A war memorial arch.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/India_Gate_by_night_01.jpg/1280px-India_Gate_by_night_01.jpg)\n    * **Geo Coordinates:** 28.6130° N, 77.2295° E\n    * **Time to Travel:** 15 minutes from Connaught Place. \n\n* **Evening (4:00 PM - 6:00 PM):**\n    * **National Museum:**  A large museum housing a vast collection of Indian art, history, and culture. \n    * **Place Details:**  A museum with a wide range of exhibits.\n    * **Image URL:** (Example: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/National_Museum_%28Delhi%29_%28cropped%29.jpg/1280px-National_Museum_%28Delhi%29_%28cropped%29.jpg)\n    * **Geo Coordinates:** 28.6322° N, 77.2207° E\n    * **Time to Travel:** 15 minutes from India Gate.\n\n* **Evening (6:00 PM - 8:00 PM):**\n    * **Shopping at Connaught Place:**  Explore the bustling markets and shops in Connaught Place, a popular shopping destination. \n    * **Place Details:** A commercial and shopping hub in the heart of Delhi. \n\n* **Night (8:00 PM - 10:00 PM):**\n    * **Dinner at The Big Chill Cakery (Connaught Place):**  A popular restaurant serving delicious desserts, Italian, and Continental cuisine.\n    * **Place Details:** A cafe chain with multiple locations. \n\n**Best Time to Visit:**\n\n* **October to March:** The best time to visit Delhi for pleasant weather and festivals.\n* **April to June:**  Pleasant weather but with increasing heat.\n* **July to September:**  Monsoon season with heavy rains.\n\n**Important Notes:**\n\n* This itinerary is a suggestion, and you can customize it based on your family's interests and budget.\n* Delhi is a bustling city, so be prepared for crowds, especially during peak hours.\n* It is advisable to book your flights and accommodation in advance, especially if you are traveling during peak season.\n* Consider using public transport or ride-hailing services for getting around Delhi. \n\n**Enjoy your trip to Delhi!**\n"},
            ],
          },
        ],
          
      
    });
  
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());
  
  
  