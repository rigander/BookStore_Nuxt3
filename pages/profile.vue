<script setup>
// Check if logged in prior entry to page
definePageMeta({
    middleware: 'auth'
})
const { data, error } = await useFetchGet('/user', true);
const user = data.value;
</script>

<template>
    <div class="profile_wrapper">
        <div class="profile">
            <div class="personal-data_wrapper">
                <svg class="p-d_img" id="Layer_1" height="30" width="30" data-name="Layer 1"  viewBox="0 0 111.87 122.88">
                    <path class="cls-1" d="M56.75,113.57V75.07a9.34,9.34,0,0,1,9.31-9.31h36.5a9.34,9.34,0,0,1,9.31,9.31v38.5a9.34,9.34,0,0,1-9.31,9.31H66.06a9.34,9.34,0,0,1-9.31-9.31Zm2.74-102.1L79.08,29.82H59.49V11.47ZM20.72,69.38a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21H45.3V69.38Zm0,15.83a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21H45.3V85.21Zm0-47.5a2.12,2.12,0,0,0-2,2.21,2.09,2.09,0,0,0,2,2.21H43.45a2.12,2.12,0,0,0,2-2.21,2.1,2.1,0,0,0-2-2.21Zm0-15.83a2.12,2.12,0,0,0-2,2.21,2.08,2.08,0,0,0,2,2.21h12.5a2.12,2.12,0,0,0,2-2.21,2.09,2.09,0,0,0-2-2.21Zm0,31.67a2.12,2.12,0,0,0-2,2.21,2.1,2.1,0,0,0,2,2.21H59.16a2.13,2.13,0,0,0,2-2.21,2.09,2.09,0,0,0-2-2.21ZM90,32.45a3.26,3.26,0,0,0-2.37-3.14L58.74,1.2A3.21,3.21,0,0,0,56.23,0H5.87A5.86,5.86,0,0,0,0,5.86V106.25a5.84,5.84,0,0,0,1.72,4.15,5.91,5.91,0,0,0,4.15,1.71H45.39v-6.55H6.55v-99H52.94V33.08a3.29,3.29,0,0,0,3.29,3.29h27.2V57.82H90V32.45ZM77.73,94.75c-.58-.9-1.65-2.15-1.65-3.22A1.72,1.72,0,0,1,77.24,90c0-.9-.09-1.83-.09-2.74,0-.54,0-1.09,0-1.62a5.51,5.51,0,0,1,.18-1,5.74,5.74,0,0,1,2.58-3.28,7.83,7.83,0,0,1,1.4-.67c.89-.32.45-1.81,1.42-1.83,2.27-.06,6,2,7.45,3.59a5.79,5.79,0,0,1,1.48,3.73l-.09,4a1.27,1.27,0,0,1,1,.81c.31,1.26-1,2.81-1.59,3.81s-2.69,3.9-2.69,3.92a.79.79,0,0,0,.19.46c3.31,4.55,13,1.68,13,10.72H67.13c0-9,9.72-6.17,13-10.72.16-.24.24-.37.23-.47s-2.45-3.53-2.66-3.87v0Z"/>
                </svg>
                <div class="personal-data">
                    <h1>Personal Data</h1>
                    <div class="personal-data_p1">
                        <div class="p-d_family-name p-d_p1">
                            <h2>Surname</h2>
                            <span>Roberts</span>
                        </div>
                        <div class="p-d_name p-d_p1">
                            <h2>Name</h2>
                            <span>{{ user.name }}</span>
                        </div>
                    </div>
                    <div class="personal-data_p2">
                        <div class="p-d_date-of-b p-d_p2">
                            <h2>Date of birth</h2>
                            <span>17 october 2987</span>
                        </div>
                        <div class="p-d_phone">
                            <h2>Phone</h2>
                            <span>{{ user.phone }}</span>
                        </div>
                    </div>
                    <div class="personal-data_p3">
                        <div class="p-d_email">
                            <h2>Email</h2>
                            <span>{{ user.email }}</span>
                        </div>
                    </div>
                    <button class="p-d_edit-data">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>