<script setup>
let bios;
let profs;
let earths;
let maths;
let cardsImages;
bios = [
    {
        link: "/",
        name: "General"
    },
    {
        link: "/scifi",
        name: "Diaries, Letters, & Journals"
    },
    {
        link: "/product",
        name: "Memoirs"
    },
    {
        link: "/",
        name: "True Stories"
    },
    {
        link: "/",
        name: "Generic Exams"
    },
    {
        link: "/",
        name: "GK Titles"
    },
    {
        link: "/",
        name: "Medical Entrance"
    },
    {
        link: "/",
        name: "Other Entrance Exams"
    },
    {
        link: "/",
        name: "PG Entrance Examinations"
    },
    {
        link: "/",
        name: "Self-help Titles"
    },
    {
        link: "/",
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
                    ><NuxtLink
                        :href="bio.link">{{ bio.name }}
                    </NuxtLink></li>
                </ul>
            </div>
            <div id="professional-reference">
                <h3>Professional & Reference </h3>
                <ul>
                    <li v-for="prof in profs"
                    ><NuxtLink
                        :href="prof.link">{{ prof.name }}
                    </NuxtLink></li>
                </ul>
            </div>
            <div id="earth-sciences">
                <h3>Earth Sciences</h3>
                <ul>
                    <li v-for="earth in earths"
                    ><NuxtLink
                        :href="earth.link">{{ earth.name }}
                    </NuxtLink></li>
                </ul>
            </div>
            <div id="mathematics">
                <h3>Mathematics</h3>
                <ul>
                    <li v-for="math in maths"
                    ><NuxtLink
                        :href="math.link">{{ math.name }}
                    </NuxtLink></li>
                </ul>
            </div>
        </div>
        <div class="banking">
            <div id="accept">
                We accept all major Credit Card/Debit Card/Internet Banking
            </div>
            <div class="cards-container">
                <div class="cards"
                     v-for="card in cardsImages"
                >
                    <img :src="`/img/Footer/${card.image}.png`" alt="">
                </div>
            </div>
        </div>
        <div id="bottom">
            <NuxtLink href="">
                Conditions of Use Privacy Notice© 2022-2023,
                Booksonline, Inc. or its affiliates
            </NuxtLink></div>
    </footer>
</template>


