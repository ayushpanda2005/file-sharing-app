import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton>
                <button className="bg-transparent text-[#6c47ff] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
