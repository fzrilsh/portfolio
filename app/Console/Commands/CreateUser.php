<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\form;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = form()
            ->text(
                label: 'name for your user?',
                required: true,
                name: 'name'
            )
            ->password(
                label: 'input the password.',
                validate: ['password' => 'min:8'],
                required: true,
                name: 'password'
            )
            ->submit();
        
        $response['password'] = Hash::make($response['password']);
        $user = User::query()->create($response);
        $this->info($user->name . ' created successfully');
    }
}
