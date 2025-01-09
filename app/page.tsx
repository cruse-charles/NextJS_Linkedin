import UserInformation from "@/components/UserInformation";
import PostForm from "@/components/PostForm";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline col-span-2">
        {/* User Info */}
        <UserInformation />
      </section>
      <section className="col-span-full md:col-span-6 xl:col-span-4  xl:max-w-lg mx-auto w-full">
        {/* Post Form */}
        <PostForm />
        {/* Post Feed */}
      </section>
      <section className="hidden xl:inline justify-center col-span-2">
        {/* Widget */}
      </section>
    </div>
  );
}
