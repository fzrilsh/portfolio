<main class="mt-24">
    <section class="max-w-2xl mx-auto px-6">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="mt-10 p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Sign in to your account
                    </h1>
                    @error('invalid')
                    <x-alert text="{{ $message }}" color="red" light />
                    @enderror
                    <form class="space-y-4 md:space-y-6" wire:submit="login">
                        <x-input label="Name" hint="Insert your name" wire:model='name' />
                        <x-input label="Password" hint="Insert your password" type="password" wire:model='password' />
                        <button type="submit" class="w-full text-white bg-black hover:bg-black-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>