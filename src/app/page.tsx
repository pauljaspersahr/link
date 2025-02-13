import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default async function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
