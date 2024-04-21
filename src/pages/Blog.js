import React from 'react'
import NavBar from '../Components/NavBar'
import Last3Page from '../Components/Last3Page'

export default function Blog() {
    return (
        <div className='lg:flex block overflow-x-auto h-[100vh]'>
            <NavBar />
            <section className='bg-black flex-shrink-0  w-screen h-screen py-24 flex items-center justify-center'>
                <div className='flex h-[80vh] '>
                    <div className=''>
                        <div class="deck w-[30vw] h-[45vh] border border-teal-500">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://media.istockphoto.com/id/1459581852/photo/digital-transformation-concept-high-speed-agile-development.webp?b=1&s=170667a&w=0&k=20&c=k-Hq8bPw-XMYY7tF72Wr9cK-yv6irWR6dce6KCqyqnE=' />
                                </div>
                                <div className=" back face">
                                    <p className=" text-center mt-[22%] text-white 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">Basic</p>


                                </div>
                            </div>
                        </div>

                        <div class="deck w-[30vw] h-[35vh] border border-teal-500">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://variety.com/wp-content/uploads/2023/06/featured_metaverse_v2_sr.jpg?w=910&h=511&crop=1' />
                                </div>
                                <div class="back face flex justify-center items-center">
                                    <p className="text-white text-center mt-[22%] 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">Basic</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div class="deck flex justify-center items-center w-[30vw] h-[35vh] ">
                            <p className="text-white 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">blog</p>
                        </div>

                        <div class="deck w-[30vw] h-[45vh] border border-teal-500">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://www.zdnet.com/a/img/resize/d36e142bd1aa124b869cfb89a70d89d823f44565/2023/12/19/33404002-f49d-4e20-8789-9af8ddcd4da3/photobot.jpg?auto=webp&width=1280' />
                                </div>
                                <div class="back face">
                                    <p className="text-white text-center mt-[22%] 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">Basic</p>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="deck">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://media.istockphoto.com/id/1459581852/photo/digital-transformation-concept-high-speed-agile-development.webp?b=1&s=170667a&w=0&k=20&c=k-Hq8bPw-XMYY7tF72Wr9cK-yv6irWR6dce6KCqyqnE=' />
                                </div>
                                <div class="back face">
                                    <h2>Basic</h2>

                                </div>
                            </div>
                        </div>

                        <div class="deck">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://media.istockphoto.com/id/1459581852/photo/digital-transformation-concept-high-speed-agile-development.webp?b=1&s=170667a&w=0&k=20&c=k-Hq8bPw-XMYY7tF72Wr9cK-yv6irWR6dce6KCqyqnE=' />
                                </div>
                                <div class="back face">
                                    <h2>Basic</h2>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div class="deck w-[30vw] h-[45vh] border border-teal-500">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://cdn.analyticsvidhya.com/wp-content/uploads/2023/08/What-is-M.Tech-in-Artificial-Intelligence_AI.jpg.optimal.jpg' />
                                </div>
                                <div class="back face">
                                    <p className="text-white text-center mt-[22%] 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">Basic</p>

                                </div>
                            </div>
                        </div>

                        <div class="deck w-[30vw] h-[35vh] border border-teal-500">
                            <div class="card hovercard">
                                <div class="front face">
                                    <img className='w-full h-full' src='https://media.istockphoto.com/id/1459581852/photo/digital-transformation-concept-high-speed-agile-development.webp?b=1&s=170667a&w=0&k=20&c=k-Hq8bPw-XMYY7tF72Wr9cK-yv6irWR6dce6KCqyqnE=' />
                                </div>
                                <div class="back face">
                                    <p className="text-white text-center mt-[22%] 2xl:text-[120px] text-[80px] font-bold font-['Jost'] uppercase">Basic</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Last3Page />
        </div>
    )
}
