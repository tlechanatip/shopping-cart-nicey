export default function Footer({}) {

return(
  <footer class="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <a class="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
        Nicey
      </a>
      <p class="my-6 text-gray-400 dark:text-gray-400">
        Nicey มีรองเท้าอีกมากมายให้คุณเลือกในอนาคต อย่าลืม Nicey.
      </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
        <li>
          <a class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Premium</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6 ">Campaigns</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Blog</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Affiliate Program</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">FAQs</a>
        </li>
        <li>
          <a class="mr-4 hover:underline md:mr-6">Contact</a>
        </li>
      </ul>
      <span class="text-sm text-gray-400 sm:text-center dark:text-gray-400">
        © 2024-2024{" "}
        <a href="#" class="hover:underline">
          Nicey
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>);
}
