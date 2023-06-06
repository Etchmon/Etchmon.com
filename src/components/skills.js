import React from "react";

const Skills = () => {


    return (
        <section className="skills">
            <h1>Skills</h1>
            <p>"Adaptability is key to survival in the ever-changing world." -John Wooden</p>
            <div>
                <div>
                    <h3>Front End</h3>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" viewBox="0 0 512 512" id="javascript"><rect width="512" height="512" fill="#f7df1e" rx="15%"></rect><path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path></svg>
                            JavaScript
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128" id="react"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g></svg>
                            React
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nextjs" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" /> <path d="M15 12v-3" /> </svg>
                            Next.js
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="tailwind-css" textAnchor="middle" dominantBaseline="middle">
                                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" fill="#ffffff" style={{ transform: 'translate(25%, 25%)' }}></path>
                            </svg>
                            Tailwind
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Back End</h3>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="node-js"><path fill="#83CD29" d="M112.771 30.334l-44.097-25.605c-2.781-1.584-6.402-1.584-9.205 0l-44.568 25.605c-2.87 1.651-4.901 4.754-4.901 8.073v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623c-.712 0-2.306 1.061-2.306 1.773v50.49c0 3.896-3.524 7.773-10.11 4.48l-12.167-7.013c-.424-.23-.723-.693-.723-1.181v-51.142c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754c1.417.82 3.027 1.246 4.647 1.246 1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083v-51.142c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path></svg>
                            Node js
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="express"><path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7L92.66 62.34 67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21C102.65 49.82 109 41.7 115 33.26c2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33 64.78 1.33 61.74zM7.2 60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63 32.56 7.85 43.7 7.2 60.25z"></path></svg>
                            Express
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="api" fill="#ffffff"><path fill="#ffffff" d="M14.16 15.715c-.107 0-.179-.03-.215-.09-.037-.06-.055-.16-.055-.3v-2.66c0-.274-.06-.505-.18-.695a1.437 1.437 0 0 0-.475-.465 2.122 2.122 0 0 0-.665-.26 3.565 3.565 0 0 0-.75-.08c-.287 0-.566.027-.84.08a2.157 2.157 0 0 0-.735.28c-.217.134-.395.31-.535.53-.14.22-.22.497-.24.83h1.14c.027-.28.144-.487.35-.62s.47-.2.79-.2c.113 0 .233.009.36.025.126.017.242.05.345.1a.71.71 0 0 1 .26.215c.07.093.105.213.105.36 0 .167-.042.292-.125.375a.761.761 0 0 1-.34.185 2.82 2.82 0 0 1-.495.085 5.947 5.947 0 0 0-.59.085c-.24.027-.479.065-.715.115-.237.05-.45.132-.64.245-.19.114-.344.27-.46.47-.117.2-.175.46-.175.78 0 .253.048.475.145.665.097.19.227.347.39.47.163.124.352.217.565.28.213.063.436.095.67.095.307 0 .625-.05.955-.15.33-.1.608-.26.835-.48.047.234.146.397.3.49a1.1 1.1 0 0 0 .58.14 2.358 2.358 0 0 0 .565-.085c.063-.017.115-.032.155-.045v-.79a.766.766 0 0 1-.16.02h-.12zm-1.41-.981c0 .18-.044.332-.13.455a1.1 1.1 0 0 1-.325.305c-.13.08-.269.137-.415.17a1.818 1.818 0 0 1-.745.02c-.123-.02-.236-.055-.34-.105s-.192-.118-.265-.205a.478.478 0 0 1-.11-.32c0-.146.025-.271.075-.375a.655.655 0 0 1 .205-.25c.086-.063.186-.113.3-.15.113-.037.23-.065.35-.085a8.21 8.21 0 0 1 .76-.105c.253-.023.467-.092.64-.205v.85zm6.92-2.764c-.2-.25-.452-.447-.755-.59a2.475 2.475 0 0 0-1.065-.215c-.333 0-.644.065-.93.195-.287.13-.51.345-.67.645h-.02v-.7h-1.08v7.08h1.14v-2.58h.02c.086.14.195.262.325.365.13.104.271.189.425.255.153.066.313.115.48.145.166.03.333.045.5.045.38 0 .71-.075.99-.225.28-.15.512-.35.695-.6.183-.25.32-.538.41-.865a3.79 3.79 0 0 0 .135-1.01c0-.38-.05-.736-.15-1.07-.1-.334-.25-.625-.45-.875zm-.615 2.59c-.05.217-.134.41-.25.58-.117.17-.265.309-.445.415-.18.106-.4.16-.66.16a1.303 1.303 0 0 1-1.07-.52 1.64 1.64 0 0 1-.285-.575 2.621 2.621 0 0 1-.095-.725c0-.553.122-.997.365-1.33.243-.333.605-.5 1.085-.5.233 0 .44.052.62.155.18.104.33.24.45.41.12.17.21.365.27.585.06.22.09.446.09.68 0 .226-.025.448-.075.665zm2.205-5.225h1.14v1.08h-1.14zm0 1.97h1.14v5.17h-1.14z"></path><path d="M3 3v26h26V3H3zm2 2h22v18H5V5z"></path></svg>
                            RESTful API
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="mongodb"><path fill="#439934" fill-rule="evenodd" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051c-.057-8.084-.113-16.168-.169-24.252l1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z" clip-rule="evenodd"></path><path fill="#45A538" fill-rule="evenodd" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z" clip-rule="evenodd"></path><path fill="#46A037" fill-rule="evenodd" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z" clip-rule="evenodd"></path><path fill="#409433" fill-rule="evenodd" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182-1.72 3.503-3.863 6.77-6.353 9.763-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753c-.865-3.223-1.319-6.504-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z" clip-rule="evenodd"></path><path fill="#4FAA41" fill-rule="evenodd" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642-2.217-6.628-4.452-13.249-6.7-19.867-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879 2.265 6.703 4.526 13.407 6.768 20.118 2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78c-.056 3.351-.112 6.701-.167 10.052z" clip-rule="evenodd"></path><path fill="#4AA73C" fill-rule="evenodd" d="M43.155 32.227c.21.274.511.516.617.826 2.248 6.618 4.483 13.239 6.7 19.867 2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9-1.737-5.187-3.483-10.371-5.242-15.551-.089-.263-.34-.469-.516-.702 1.09-2.947 2.181-5.894 3.272-8.84z" clip-rule="evenodd"></path><path fill="#57AE47" fill-rule="evenodd" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198-2.242-6.711-4.503-13.415-6.768-20.118-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z" clip-rule="evenodd"></path><path fill="#60B24F" fill-rule="evenodd" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z" clip-rule="evenodd"></path><path fill="#A9AA88" fill-rule="evenodd" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011c.075 3.334.529 6.615 1.394 9.838-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z" clip-rule="evenodd"></path><path fill="#B6B598" fill-rule="evenodd" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z" clip-rule="evenodd"></path><path fill="#C2C1A7" fill-rule="evenodd" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z" clip-rule="evenodd"></path><path fill="#CECDB7" fill-rule="evenodd" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z" clip-rule="evenodd"></path><path fill="#DBDAC7" fill-rule="evenodd" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z" clip-rule="evenodd"></path><path fill="#EBE9DC" fill-rule="evenodd" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z" clip-rule="evenodd"></path><path fill="#CECDB7" fill-rule="evenodd" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z" clip-rule="evenodd"></path><path fill="#4FAA41" fill-rule="evenodd" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z" clip-rule="evenodd"></path></svg>
                            MongoDb
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="git"><g fill="#ffffff" stroke="#303c42" stroke-linecap="round" stroke-linejoin="round" data-name="<Group>"><path d="M23.21 11.29 12.71.79a1 1 0 0 0-1.41 0L.79 11.29a1 1 0 0 0 0 1.41l10.5 10.5a1 1 0 0 0 1.41 0l10.5-10.5a1 1 0 0 0 0-1.41ZM8.6 3.6l2.34 2.34M12 8.5v7" data-name="<Path>"></path><circle cx="12" cy="7" r="1.5" data-name="<Path>"></circle><circle cx="17" cy="12" r="1.5" data-name="<Path>"></circle><circle cx="12" cy="17" r="1.5" data-name="<Path>"></circle><path d="m13.05 8.07 2.88 2.88" data-name="<Path>"></path></g></svg>
                            Git
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-vercel" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" stroke="none" /><path d="M3 19h18l-9 -15z" /></svg>
                            Vercel
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="webpack"><path fill="#ffffff" d="M117.29 98.1L66.24 127V104.49L98 87 117.29 98.1zm3.5-3.16V34.55L102.11 45.35V84.16l18.67 10.77zM10.71 98.1l51 28.88V104.49L29.94 87zm-3.5-3.16V34.55L25.89 45.35V84.16zm2.19-64.3L61.76 1V22.76L28.21 41.21l-.27.15zm109.18 0L66.24 1V22.76L99.79 41.2l.27.15 18.54-10.71zM61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0L97.63 82.12V47.92L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"></path></svg>
                            Webpack
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Skills;