<script setup>
let bios;
let profs;
let earths;
let maths;
let cardsImages;
bios = [
    {
        link: "",
        name: "General"
    },
    {
        link: "",
        name: "Diaries, Letters, & Journals"
    },
    {
        link: "",
        name: "Memoirs"
    },
    {
        link: "",
        name: "True Stories"
    },
    {
        link: "",
        name: "Generic Exams"
    },
    {
        link: "",
        name: "GK Titles"
    },
    {
        link: "",
        name: "Medical Entrance"
    },
    {
        link: "",
        name: "Other Entrance Exams"
    },
    {
        link: "",
        name: "PG Entrance Examinations"
    },
    {
        link: "",
        name: "Self-help Titles"
    },
    {
        link: "",
        name: "Sociology"
    },
];
profs = [
    {
        link: "",
        name: "Academic and Reference"
    },
    {
        link: "",
        name: "Business Trade"
    },
    {
        link: "",
        name: "Engineering and Computer Science"
    },
    {
        link: "",
        name: "True Stories"
    },
    {
        link: "",
        name: "Introduction to Computers"
    },
    {
        link: "",
        name: "Science and Maths"
    },
    {
        link: "",
        name: "Humanities, Social Sciences and Languages"
    },
    {
        link: "",
        name: "Trade Business"
    },
    {
        link: "",
        name: "English Language Teaching"
    },
    {
        link: "",
        name: "Environment Awareness"
    },
    {
        link: "",
        name: "Environment Protection"
    },
];
earths = [
    {
        link: "",
        name: "Earth Sciences"
    },
    {
        link: "",
        name: "Geography"
    },
    {
        link: "",
        name: "The Environment"
    },
    {
        link: "",
        name: "Regional & Area Planning"
    },
    {
        link: "",
        name: "Fantasy"
    },
    {
        link: "",
        name: "Gay"
    },
    {
        link: "",
        name: "Humorous"
    },
    {
        link: "",
        name: "Interactive"
    },
    {
        link: "",
        name: "Legal"
    },
    {
        link: "",
        name: "Lesbian"
    },
    {
        link: "",
        name: "Men'S Adventure"
    },
];
maths = [
    {
        link: "",
        name: "Algebra"
    },
    {
        link: "",
        name: "Differential Equations"
    },
    {
        link: "",
        name: "Discrete Mathematics"
    },
    {
        link: "",
        name: "Fourier Analysis"
    },
    {
        link: "",
        name: "Numerical Analysis"
    },
    {
        link: "",
        name: "Probability"
    },
    {
        link: "",
        name: "Statistic Methods/data Analyses"
    },
    {
        link: "",
        name: "Stochastic And Random Processes"
    },
    {
        link: "",
        name: "Topology"
    },
    {
        link: "",
        name: "Statistics"
    },
    {
        link: "",
        name: "Mathematics"
    },
];
cardsImages = [
    {
        image: "Master-Card"
    },
    {
        image: "American-Express"
    },
    {
        image: "Visa"
    },
]
</script>

<template>
    <footer>
        <div id="list-of-themes">
            <div id="biography-true-stories">
                <h3>Biography & True Stories</h3>
                <ul>
                    <li v-for="bio in bios"
                    ><a href="">{{ bio.name }}</a></li>
                </ul>
            </div>
            <div id="professional-reference">
                <h3>Professional & Reference </h3>
                <ul>
                    <li v-for="prof in profs"
                    ><a href="">{{ prof.name }}</a></li>
                </ul>
            </div>
            <div id="earth-sciences">
                <h3>Earth Sciences</h3>
                <ul>
                    <li v-for="earth in earths"
                    ><a href="">{{ earth.name }}</a></li>
                </ul>
            </div>
            <div id="mathematics">
                <h3>Mathematics</h3>
                <ul>
                    <li v-for="math in maths"
                    ><a href="">{{ math.name }}</a></li>
                </ul>
            </div>
        </div>
        <div class="banking">
            <div id="accept">
                We accept all major Credit Card/Debit Card/Internet Banking
            </div>
            <div class="cards"
                 v-for="card in cardsImages"
            >
                <img :src="`/img/Footer/${card.image}.png`" alt="">
            </div>
        </div>
        <div id="bottom"><a href="">Conditions of Use Privacy Notice© 2012-2013, Booksonline, Inc. or its affiliates</a></div>
    </footer>
</template>


