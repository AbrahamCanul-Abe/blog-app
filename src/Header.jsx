import React from 'react';

function Header() {
	return (
		<>
			<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-900 dark:bg-gray-900">
				<div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
					<article class="mx-auto w-full max-w-2xl  format-sm sm:format-base lg:format-lg format-blue format-invert">
						<header class="mb-4 lg:mb-6 ">
							<address class="flex items-center mb-6 not-italic">
								<div class="inline-flex items-center mr-3 text-sm  text-white">
									<img
										class="mr-4 w-16 h-16 rounded-full "
										src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
										alt="Jese Leos"
									/>
									<div>
										<a
											href="#"
											rel="author"
											class="text-xl font-bold  text-white"
										>
											Abraham Canul
										</a>
										<p class="text-base font-light text-gray-400">
											Graphic Designer, educator & CEO Flowbite
										</p>
										<p class="text-base font-light text-gray-400">
											<time
												pubdate
												datetime="2022-02-08"
												title="February 8th, 2022"
											>
												Feb. 8, 2022
											</time>
										</p>
									</div>
								</div>
							</address>
							<h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
								Best practices for successful prototypes
							</h1>
						</header>
					</article>
				</div>
			</main>
		</>
	);
}

export default Header;
