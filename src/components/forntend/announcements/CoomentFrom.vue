<template>
    <div class="w-full space-y-3">
        <div class="space-y-2">
            <h3 class="text-3xl font-semibold text-[#3F642E]">Leave a Reply</h3>
            <p class="text-sm">Your email address will not be published. Required fields are marked <span class="text-red-500">*</span></p>
        </div>
        <form action="" class="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-2">
            <div class="md:col-span-2">
                <label for="name">Comments</label>
                <Textarea label="Comments" placeholder="Your Comments" rows="5" class="w-full mt-2" />
            </div>
            <div>
                <label for="name" >Name <span class="text-red-500">*</span></label>
                <InputText id="name" type="text" placeholder="Your Name" class="w-full mt-2" />
            </div>
            <div>
                <label for="email">Email <span class="text-red-500">*</span></label>
                <InputText id="email" type="email" placeholder="Your Email" class="w-full mt-2" />
            </div>
            <div class="md:col-span-2">
                <label for="website">Website</label>
                <InputText id="website" type="text" placeholder="Your Website" class="w-full mt-2" />
            </div>
            <div class="md:col-span-2">
                <button class="btn bg-[#3F642E] hover:bg-[#B35C2E] px-10 py-1 text-white rounded-full transition-all duration-500 hover:scale-110 cursor-pointer">Post Comment</button>
            </div>
        </form>
    </div>
</template>