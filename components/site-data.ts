export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "People", href: "/people/" },
  { label: "Equipment", href: "/equipment/" },
  { label: "Research", href: "/research/" },
  { label: "Courses", href: "/courses/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const students = [
  { name: "Sam Fisher", chinese: "翁益寧", role: "PhD student", image: "/img/people/sam.jpg" },
  { name: "Ray Chen", chinese: "陳博煒", role: "MA student", image: "/img/people/ray.jpg" },
  { name: "Benson Huang", chinese: "黃柏瑄", role: "MA student", image: "/img/people/benson.jpg" },
  { name: "Willy Wang", chinese: "王麒瑋", role: "MA student", image: "/img/people/willy.jpg" },
  { name: "Hess Huang", chinese: "黃建誌", role: "MA student", image: "/img/people/hess.jpg" },
] as const;

export const equipment = [
  { title: "Recording room", description: "A controlled, sound-proof environment for clean and reliable acoustic recording.", image: "/img/equipments/room.jpeg", label: "Acoustics" },
  { title: "Ultrasonography", description: "Real-time imaging used to observe tongue shape and movement during speech.", image: "/img/equipments/us.jpg", label: "Articulation" },
  { title: "Electroglottography", description: "A non-invasive measure of vocal-fold contact patterns and phonation.", image: "/img/equipments/egg.jpg", label: "Phonation" },
  { title: "Electromyography", description: "Electrical measurements that reveal speech-related muscle activity and coordination.", image: "/img/equipments/emg.jpg", label: "Motor control" },
] as const;

export const projects = [
  { number: "01", title: "Acoustic–articulatory correspondence", text: "How vowel acoustics, tongue posture, and speech motor control change across different head angles." },
  { number: "02", title: "Mandarin high-vowel rounding", text: "Automated extraction and analysis of lip postures from speech-production data." },
  { number: "03", title: "Phonetic detail in speech plans", text: "How musical training and physiological constraints shape duration, pitch, and planned responses." },
  { number: "04", title: "Auditory perturbation", text: "The roles of feedforward and feedback control in planning and executing speech." },
  { number: "05", title: "Taiwan Mandarin sound merger", text: "The contribution of tongue posture to nasal and sibilant mergers in Taiwan Mandarin." },
  { number: "06", title: "Secondary articulation in Horpa", text: "The articulatory mechanisms involved in secondary articulation in vowels." },
] as const;

export const courses = [
  { label: "Required", title: "Core linguistics", items: ["Introduction to Phonology 聲韻學", "Linguistic Fieldwork 語言學田野調查"] },
  { label: "Elective", title: "Speech science", items: ["Physiological Bases of Speech Production", "Speech Perception and Production", "Speech Motor Control", "Ultrasound for Linguistic Research"] },
  { label: "General education", title: "Language in context", items: ["Speech Behaviors and Speech Sciences 發音、行為與科學", "Uncovering Languages 探索語言"] },
] as const;
