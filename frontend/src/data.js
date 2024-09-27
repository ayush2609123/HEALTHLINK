export const Menu = [
    {
        id: 1,
        name: "Home",
        path: '/'
    },
    {
        id: 2,
        name: "Explore",
        path: '/'
    },
    {
        id: 3,
        name: "Contact Us",
        path: '/'
    },
    {
        id: 4,
        name: "Price Prediction",
        path: '/price-prediction'
    },
    {
        id: 5,
        name: "Donate",
        path: '/donate'
    },
    {
        id: 6,
        name: "Gov Schemes",
        path: '/gov-schemes'
    },
    {
        id: 7,
        name: "Info",
        path: '/info'
    }
];





export const specialties = [
    { specialty: "Cardiology", image: "https://link-to-your-image/cardiology.png" },
    { specialty: "Dermatology", image: "https://link-to-your-image/dermatology.png" },
    { specialty: "Neurology", image: "https://link-to-your-image/neurology.png" },
    { specialty: "Pediatrics", image: "https://link-to-your-image/pediatrics.png" },
    { specialty: "Orthopedics", image: "https://link-to-your-image/orthopedics.png" },
    { specialty: "Psychiatry", image: "https://link-to-your-image/psychiatry.png" },
    { specialty: "Gynecology", image: "https://link-to-your-image/gynecology.png" },
    { specialty: "Oncology", image: "https://link-to-your-image/oncology.png" },
    { specialty: "General Practice", image: "https://link-to-your-image/general-practice.png" },
    { specialty: "Endocrinology", image: "https://link-to-your-image/endocrinology.png" },
    { specialty: "Ophthalmology", image: "https://link-to-your-image/ophthalmology.png" },
    { specialty: "ENT", image: "https://link-to-your-image/ent.png" },
    { specialty: "General Medicine", image: "https://link-to-your-image/general-medicine.png" } // Added general specialty
];



export const doctors = [
    {
        _id: "1",
        name: "Dr. Aarav Sharma",
        image: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg",
        specialty: "Cardiology",
        degree: "MD, FACC",
        experience: 10,
        about: "Experienced cardiologist dedicated to heart health. With over a decade of experience, Dr. Aarav Sharma specializes in diagnosing and treating heart-related issues, offering personalized care and advanced treatment options to ensure optimal cardiovascular health for his patients.",
        fees: 200,
        address: {
            line1: "12 Heart Lane",
            line2: "Agar Nagar, Agra",
        },
    },
    {
        _id: "2",
        name: "Dr. Riya Gupta",
        image: "https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ebKJ9M5xL2OJwpTBhIRzyFolm0oB2mRSaSeBV3zUt-I=",
        specialty: "Dermatology",
        degree: "MD, Dermatologist",
        experience: 8,
        about: "Specializing in skin conditions, Dr. Riya Gupta is committed to providing comprehensive skincare solutions. She utilizes the latest techniques and treatments to address a wide range of skin issues, ensuring her patients achieve healthy and radiant skin.",
        fees: 150,
        address: {
            line1: "45 Skin St.",
            line2: "Sector 15, Ghaziabad",
        },
    },
    {
        _id: "3",
        name: "Dr. Vikram Patel",
        image: "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
        specialty: "Neurology",
        degree: "MD, Neurologist",
        experience: 12,
        about: "Expert in neurological disorders. Dr. Vikram Patel has extensive experience in diagnosing and treating complex neurological conditions, utilizing state-of-the-art diagnostic tools and therapies to enhance his patients' quality of life.",
        fees: 250,
        address: {
            line1: "78 Brain Ave.",
            line2: "Noida Sector 62, Noida",
        },
    },
    {
        _id: "4",
        name: "Dr. Neha Verma",
        image: "https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk=",
        specialty: "Pediatrics",
        degree: "MD, FAAP",
        experience: 6,
        about: "Compassionate pediatrician. Dr. Neha Verma is dedicated to providing comprehensive healthcare for children, focusing on preventive care, developmental milestones, and effective treatment of childhood illnesses.",
        fees: 180,
        address: {
            line1: "101 Kids Lane",
            line2: "Kavi Nagar, Ghaziabad",
        },
    },
    {
        _id: "5",
        name: "Dr. Rahul Singh",
        image: "https://media.istockphoto.com/id/1356785682/photo/successful-female-doctor-isolated-on-grey-background.jpg?s=612x612&w=0&k=20&c=Vq_2Nwx2I2QI7Trg9x5byBzqZ9Mh_fnyxQctH_kpPU4=",
        specialty: "Orthopedics",
        degree: "MS, Orthopedic Surgeon",
        experience: 15,
        about: "Expert in orthopedic surgeries. Dr. Rahul Singh specializes in treating musculoskeletal issues and provides advanced surgical and non-surgical options for joint and bone health.",
        fees: 300,
        address: {
            line1: "34 Bone Blvd.",
            line2: "Mohan Nagar, Ghaziabad",
        },
    },
    {
        _id: "6",
        name: "Dr. Ananya Joshi",
        image: "https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w=",
        specialty: "Gynecology",
        degree: "MD, Gynecologist",
        experience: 9,
        about: "Dedicated to women's health, Dr. Ananya Joshi offers a full range of gynecological services, from routine exams to advanced treatment options, ensuring personalized care for women at all stages of life.",
        fees: 220,
        address: {
            line1: "22 Women’s Way",
            line2: "Sector 18, Noida",
        },
    },
    {
        _id: "7",
        name: "Dr. Sneha Reddy",
        image: "https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=s9kTlQCWJcYmCyMwYwJfTq7jiC1NfHaXzZyGhi4fRHM=",
        specialty: "Dentistry",
        degree: "BDS, MDS",
        experience: 7,
        about: "Passionate about dental care. Dr. Sneha Reddy focuses on providing comprehensive dental services, ensuring that her patients maintain optimal oral health through education and personalized treatment plans.",
        fees: 150,
        address: {
            line1: "33 Tooth Rd.",
            line2: "Sector 50, Noida",
        },
    },
    {
        _id: "8",
        name: "Dr. Amit Verma",
        image: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_1280.jpg",
        specialty: "General Medicine",
        degree: "MD, General Practitioner",
        experience: 5,
        about: "Experienced in general health issues. Dr. Amit Verma provides holistic healthcare services, focusing on disease prevention and the management of chronic conditions through a patient-centered approach.",
        fees: 180,
        address: {
            line1: "99 Main St.",
            line2: "Agra Cantt, Agra",
        },
    },
    {
        _id: "9",
        name: "Dr. Priya Kumar",
        image: "https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ebKJ9M5xL2OJwpTBhIRzyFolm0oB2mRSaSeBV3zUt-I=",
        specialty: "Ophthalmology",
        degree: "MD, Ophthalmologist",
        experience: 11,
        about: "Expert in eye care and surgeries. Dr. Priya Kumar specializes in diagnosing and treating eye conditions, ensuring that her patients receive comprehensive care for their vision health.",
        fees: 240,
        address: {
            line1: "27 Vision Lane",
            line2: "Crossing Republik, Ghaziabad",
        },
    },
    {
        _id: "10",
        name: "Dr. Sanjay Gupta",
        image: "https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=",
        specialty: "Psychiatry",
        degree: "MD, Psychiatrist",
        experience: 13,
        about: "Committed to mental health care. Dr. Sanjay Gupta provides compassionate psychiatric services, focusing on comprehensive assessments and evidence-based treatment plans to support mental well-being.",
        fees: 200,
        address: {
            line1: "14 Mind St.",
            line2: "Surya Nagar, Ghaziabad",
        },
    },
    {
        _id: "11",
        name: "Dr. Meera Nair",
        image: "https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk=",
        specialty: "Gynecology",
        degree: "MD, Gynecologist",
        experience: 10,
        about: "Specializing in women's reproductive health. Dr. Meera Nair provides a range of services from routine examinations to advanced gynecological procedures, promoting wellness in women's health.",
        fees: 250,
        address: {
            line1: "56 Female Health St.",
            line2: "Indirapuram, Ghaziabad",
        },
    },
    {
        _id: "12",
        name: "Dr. Anil Kapoor",
        image: "https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w=",
        specialty: "Dermatology",
        degree: "MD, Dermatologist",
        experience: 9,
        about: "Dedicated to skin health. Dr. Anil Kapoor specializes in diagnosing and treating a variety of skin conditions, utilizing advanced techniques to provide effective treatment options for his patients.",
        fees: 190,
        address: {
            line1: "89 Skin Care Blvd.",
            line2: "Ashok Nagar, Ghaziabad",
        },
    },
    {
        _id: "13",
        name: "Dr. Kavita Sen",
        image: "https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=612x612&w=0&k=20&c=s9kTlQCWJcYmCyMwYwJfTq7jiC1NfHaXzZyGhi4fRHM=",
        specialty: "Psychiatry",
        degree: "MD, Psychiatrist",
        experience: 8,
        about: "Focusing on mental well-being. Dr. Kavita Sen provides comprehensive psychiatric evaluations and therapeutic interventions to address various mental health concerns.",
        fees: 220,
        address: {
            line1: "75 Mind Care Ave.",
            line2: "Krishna Nagar, Ghaziabad",
        },
    }
];



 export const hospitalData = [
    {
        hospitalName: "City Hospital",
        treatments: [
            { disease: "Heart Surgery", cost: 150000 },
            { disease: "Heart Surgery", cost: 155000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 90000 },
            { disease: "Knee Replacement", cost: 50000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 3000 },
            { disease: "Diabetes Management", cost: 3500 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 70000 },
            { disease: "Cancer Treatment", cost: 250000 },
            { disease: "Cancer Treatment", cost: 240000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 180000 },
            { disease: "Heart Attack Treatment", cost: 175000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 95000 },
            { disease: "Hip Replacement", cost: 90000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 30000 },
            { disease: "Cataract Surgery", cost: 35000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 80000 },
            { disease: "Thyroid Surgery", cost: 85000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 60000 },
            { disease: "Gallbladder Surgery", cost: 65000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 40000 },
            { disease: "Kidney Stone Treatment", cost: 45000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 5000 },
            { disease: "Pneumonia Treatment", cost: 5500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 62000 },
            { disease: "Cholecystectomy", cost: 60000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 40000 },
            { disease: "Hernia Repair", cost: 45000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 72000 },
            { disease: "Appendicitis", cost: 68000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2500 },
            { disease: "Acid Reflux Treatment", cost: 2800 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 15000 },
            { disease: "Fracture Treatment", cost: 16000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 120000 },
            { disease: "Back Surgery", cost: 125000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 30000 },
            { disease: "Varicose Vein Treatment", cost: 35000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 20000 },
            { disease: "Skin Cancer Treatment", cost: 21000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Green Valley Medical Center",
        treatments: [
            { disease: "Heart Surgery", cost: 160000 },
            { disease: "Heart Surgery", cost: 165000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 85000 },
            { disease: "Knee Replacement", cost: 9000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 3200 },
            { disease: "Diabetes Management", cost: 3100 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 68000 },
            { disease: "Cancer Treatment", cost: 240000 },
            { disease: "Cancer Treatment", cost: 245000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 190000 },
            { disease: "Heart Attack Treatment", cost: 185000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 100000 },
            { disease: "Hip Replacement", cost: 95000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 28000 },
            { disease: "Cataract Surgery", cost: 30000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 70000 },
            { disease: "Thyroid Surgery", cost: 75000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 55000 },
            { disease: "Gallbladder Surgery", cost: 60000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 35000 },
            { disease: "Kidney Stone Treatment", cost: 38000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 6000 },
            { disease: "Pneumonia Treatment", cost: 6500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 58000 },
            { disease: "Cholecystectomy", cost: 56000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 42000 },
            { disease: "Hernia Repair", cost: 43000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 74000 },
            { disease: "Appendicitis", cost: 72000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2700 },
            { disease: "Acid Reflux Treatment", cost: 2900 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 14000 },
            { disease: "Fracture Treatment", cost: 15000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 130000 },
            { disease: "Back Surgery", cost: 135000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 32000 },
            { disease: "Varicose Vein Treatment", cost: 31000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 25000 },
            { disease: "Skin Cancer Treatment", cost: 26000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Downtown General Hospital",
        treatments: [
            { disease: "Heart Surgery", cost: 145000 },
            { disease: "Heart Surgery", cost: 140000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 95000 },
            { disease: "Knee Replacement", cost: 60000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 2900 },
            { disease: "Diabetes Management", cost: 3100 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 72000 },
            { disease: "Cancer Treatment", cost: 255000 },
            { disease: "Cancer Treatment", cost: 250000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 170000 },
            { disease: "Heart Attack Treatment", cost: 175000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 90000 },
            { disease: "Hip Replacement", cost: 85000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 34000 },
            { disease: "Cataract Surgery", cost: 33000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 78000 },
            { disease: "Thyroid Surgery", cost: 79000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 62000 },
            { disease: "Gallbladder Surgery", cost: 60000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 42000 },
            { disease: "Kidney Stone Treatment", cost: 44000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 5000 },
            { disease: "Pneumonia Treatment", cost: 5500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 63000 },
            { disease: "Cholecystectomy", cost: 62000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 41000 },
            { disease: "Hernia Repair", cost: 42000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 75000 },
            { disease: "Appendicitis", cost: 74000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2600 },
            { disease: "Acid Reflux Treatment", cost: 2700 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 16000 },
            { disease: "Fracture Treatment", cost: 17000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 118000 },
            { disease: "Back Surgery", cost: 120000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 28000 },
            { disease: "Varicose Vein Treatment", cost: 29000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 24000 },
            { disease: "Skin Cancer Treatment", cost: 25000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Lakeside Health Clinic",
        treatments: [
            { disease: "Diabetes Management", cost: 2500 },
            { disease: "Diabetes Management", cost: 2800 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 80000 },
            { disease: "Knee Replacement", cost: 75000 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 74000 },
            { disease: "Cancer Treatment", cost: 240000 },
            { disease: "Cancer Treatment", cost: 235000 }, // Duplicate with different cost
            { disease: "Heart Surgery", cost: 162000 },
            { disease: "Heart Surgery", cost: 161000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 96000 },
            { disease: "Hip Replacement", cost: 95000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 29000 },
            { disease: "Cataract Surgery", cost: 31000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 77000 },
            { disease: "Thyroid Surgery", cost: 78000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 59000 },
            { disease: "Gallbladder Surgery", cost: 60000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 46000 },
            { disease: "Kidney Stone Treatment", cost: 48000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 7000 },
            { disease: "Pneumonia Treatment", cost: 7500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 57000 },
            { disease: "Cholecystectomy", cost: 59000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 43000 },
            { disease: "Hernia Repair", cost: 44000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 72000 },
            { disease: "Appendicitis", cost: 70000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2900 },
            { disease: "Acid Reflux Treatment", cost: 3000 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 15000 },
            { disease: "Fracture Treatment", cost: 16000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 130000 },
            { disease: "Back Surgery", cost: 135000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 33000 },
            { disease: "Varicose Vein Treatment", cost: 34000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 22000 },
            { disease: "Skin Cancer Treatment", cost: 23000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Sunnydale Hospital",
        treatments: [
            { disease: "Heart Surgery", cost: 158000 },
            { disease: "Heart Surgery", cost: 160000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 92000 },
            { disease: "Knee Replacement", cost: 91000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 3100 },
            { disease: "Diabetes Management", cost: 2900 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 71000 },
            { disease: "Cancer Treatment", cost: 265000 },
            { disease: "Cancer Treatment", cost: 260000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 172000 },
            { disease: "Heart Attack Treatment", cost: 178000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 94000 },
            { disease: "Hip Replacement", cost: 92000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 31000 },
            { disease: "Cataract Surgery", cost: 32000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 79000 },
            { disease: "Thyroid Surgery", cost: 80000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 63000 },
            { disease: "Gallbladder Surgery", cost: 60000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 41000 },
            { disease: "Kidney Stone Treatment", cost: 42000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 6000 },
            { disease: "Pneumonia Treatment", cost: 6500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 62000 },
            { disease: "Cholecystectomy", cost: 61000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 40000 },
            { disease: "Hernia Repair", cost: 41000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 72000 },
            { disease: "Appendicitis", cost: 71000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2700 },
            { disease: "Acid Reflux Treatment", cost: 2900 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 14000 },
            { disease: "Fracture Treatment", cost: 15000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 125000 },
            { disease: "Back Surgery", cost: 130000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 30000 },
            { disease: "Varicose Vein Treatment", cost: 31000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 24000 },
            { disease: "Skin Cancer Treatment", cost: 25000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Oceanview Medical Center",
        treatments: [
            { disease: "Heart Surgery", cost: 170000 },
            { disease: "Heart Surgery", cost: 165000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 100000 },
            { disease: "Knee Replacement", cost: 95000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 2900 },
            { disease: "Diabetes Management", cost: 3000 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 72000 },
            { disease: "Cancer Treatment", cost: 250000 },
            { disease: "Cancer Treatment", cost: 245000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 190000 },
            { disease: "Heart Attack Treatment", cost: 185000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 97000 },
            { disease: "Hip Replacement", cost: 96000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 35000 },
            { disease: "Cataract Surgery", cost: 34000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 70000 },
            { disease: "Thyroid Surgery", cost: 71000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 57000 },
            { disease: "Gallbladder Surgery", cost: 60000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 45000 },
            { disease: "Kidney Stone Treatment", cost: 46000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 5000 },
            { disease: "Pneumonia Treatment", cost: 5500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 63000 },
            { disease: "Cholecystectomy", cost: 62000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 41000 },
            { disease: "Hernia Repair", cost: 42000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 73000 },
            { disease: "Appendicitis", cost: 72000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2800 },
            { disease: "Acid Reflux Treatment", cost: 2900 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 15000 },
            { disease: "Fracture Treatment", cost: 16000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 115000 },
            { disease: "Back Surgery", cost: 120000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 29000 },
            { disease: "Varicose Vein Treatment", cost: 30000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 25000 },
            { disease: "Skin Cancer Treatment", cost: 26000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Green Valley Hospital",
        treatments: [
            { disease: "Diabetes Management", cost: 2400 },
            { disease: "Diabetes Management", cost: 2500 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 90000 },
            { disease: "Knee Replacement", cost: 88000 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 70000 },
            { disease: "Cancer Treatment", cost: 250000 },
            { disease: "Cancer Treatment", cost: 245000 }, // Duplicate with different cost
            { disease: "Heart Surgery", cost: 150000 },
            { disease: "Heart Surgery", cost: 155000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 92000 },
            { disease: "Hip Replacement", cost: 91000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 30000 },
            { disease: "Cataract Surgery", cost: 31000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 75000 },
            { disease: "Thyroid Surgery", cost: 76000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 63000 },
            { disease: "Gallbladder Surgery", cost: 64000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 48000 },
            { disease: "Kidney Stone Treatment", cost: 49000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 6000 },
            { disease: "Pneumonia Treatment", cost: 6500 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 62000 },
            { disease: "Cholecystectomy", cost: 61000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 42000 },
            { disease: "Hernia Repair", cost: 43000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 71000 },
            { disease: "Appendicitis", cost: 70000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2900 },
            { disease: "Acid Reflux Treatment", cost: 3000 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 15000 },
            { disease: "Fracture Treatment", cost: 16000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 125000 },
            { disease: "Back Surgery", cost: 130000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 31000 },
            { disease: "Varicose Vein Treatment", cost: 32000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 26000 },
            { disease: "Skin Cancer Treatment", cost: 25000 }, // Duplicate with different cost
        ],
    },
    {
        hospitalName: "Riverdale Medical Center",
        treatments: [
            { disease: "Heart Surgery", cost: 165000 },
            { disease: "Heart Surgery", cost: 160000 }, // Duplicate with different cost
            { disease: "Knee Replacement", cost: 98000 },
            { disease: "Knee Replacement", cost: 95000 }, // Duplicate with different cost
            { disease: "Diabetes Management", cost: 3100 },
            { disease: "Diabetes Management", cost: 3200 }, // Duplicate with different cost
            { disease: "Appendectomy", cost: 73000 },
            { disease: "Cancer Treatment", cost: 230000 },
            { disease: "Cancer Treatment", cost: 225000 }, // Duplicate with different cost
            { disease: "Heart Attack Treatment", cost: 180000 },
            { disease: "Heart Attack Treatment", cost: 175000 }, // Duplicate with different cost
            { disease: "Hip Replacement", cost: 96000 },
            { disease: "Hip Replacement", cost: 95000 }, // Duplicate with different cost
            { disease: "Cataract Surgery", cost: 34000 },
            { disease: "Cataract Surgery", cost: 35000 }, // Duplicate with different cost
            { disease: "Thyroid Surgery", cost: 80000 },
            { disease: "Thyroid Surgery", cost: 81000 }, // Duplicate with different cost
            { disease: "Gallbladder Surgery", cost: 55000 },
            { disease: "Gallbladder Surgery", cost: 56000 }, // Duplicate with different cost
            { disease: "Kidney Stone Treatment", cost: 42000 },
            { disease: "Kidney Stone Treatment", cost: 43000 }, // Duplicate with different cost
            { disease: "Pneumonia Treatment", cost: 7000 },
            { disease: "Pneumonia Treatment", cost: 8000 }, // Duplicate with different cost
            { disease: "Cholecystectomy", cost: 64000 },
            { disease: "Cholecystectomy", cost: 65000 }, // Duplicate with different cost
            { disease: "Hernia Repair", cost: 39000 },
            { disease: "Hernia Repair", cost: 40000 }, // Duplicate with different cost
            { disease: "Appendicitis", cost: 72000 },
            { disease: "Appendicitis", cost: 73000 }, // Duplicate with different cost
            { disease: "Acid Reflux Treatment", cost: 2600 },
            { disease: "Acid Reflux Treatment", cost: 2700 }, // Duplicate with different cost
            { disease: "Fracture Treatment", cost: 15000 },
            { disease: "Fracture Treatment", cost: 16000 }, // Duplicate with different cost
            { disease: "Back Surgery", cost: 118000 },
            { disease: "Back Surgery", cost: 120000 }, // Duplicate with different cost
            { disease: "Varicose Vein Treatment", cost: 28000 },
            { disease: "Varicose Vein Treatment", cost: 29000 }, // Duplicate with different cost
            { disease: "Skin Cancer Treatment", cost: 24000 },
            { disease: "Skin Cancer Treatment", cost: 25000 }, // Duplicate with different cost
        ],
    },
];



