import React from "react";
import tankcrew from "../assets/PersonalImages/tankcrew.jpg"
import guitarselfie from "../assets/PersonalImages/guitarselfie.jpg"
import pocarisweat from "../assets/PersonalImages/pocarisweat.jpg"
import rcm_logoblack from "../assets/PersonalImages/rcm_logoblack.png"
import rcmgif from "../assets/PersonalImages/rcmgif.gif"
import m1a2 from "../assets/PersonalImages/m1a2.gif"
import selfie2 from "../assets/PersonalImages/selfie2.jpg"
import rcmpic3 from "../assets/PersonalImages/rcmpic3.jpg"
import coding from "../assets/PersonalImages/coding.jpg"
import foundfootage from "../assets/PersonalImages/foundfootage.gif"
const AboutMe = () => {

  return (
<div className="max-w-5xl mx-auto mt-10 text-neutral-100 px-4">
      {/* Header */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-5xl font-bold">Barrington K Hebert</h1>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <img
          src={foundfootage}
          alt="Me circle head-bangin!"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        My name is Barrington K. Hebert. I was born in New Orleans—a city forever caught between creation and decay, celebration and struggle. In the mosaic of its culture, I found early signs of the absurd: the joy of living beside the weight of history, the music echoing in flood-worn streets, the laughter rising over systems that never truly served us.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
        <img
          src={guitarselfie}
          alt="Gaming setup"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        As a teenager, I was a quiet insurgent, hiding in the open—one of the many who find their rebellion not on the streets, but in thought. My battlefield was digital: Halo, Civilization, Guitar Hero. Games, yes—but beneath them, complex systems of power, structure, and imagination. I modded Civilization not just to win, but to rewrite the world. Even then, I wanted more than to play the game—I wanted to understand the code beneath it. That was the first signal. I didn’t yet know it, but I was looking for freedom in systems built to contain.
        </p>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <img
          src={rcmpic3}
          alt="Barrington playing guitar"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        Music soon took me hostage. Guitar Hero led me to the real instrument, and before I knew it, I was sneaking out of classrooms to perform at talent shows, chasing a sound I hadn’t yet named. I started a band in New Orleans—an expression of a yearning that wouldn’t be tamed. But as all artists eventually learn, the stage is a reflection, not a solution.
        </p>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
        <img
          src={m1a2}
          alt="Marine Corps tank crew"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        So I left. I joined the United States Marine Corps—not out of patriotism alone, but from the same quiet revolt that had always lived in me. I was drawn to the impossible—to test the boundaries of what a life could hold. I became an M1A1 tank crewman, not for glory, but because it felt honest: a visceral role in a mechanical world. I served in Kandahar, Afghanistan, where the illusion of control gives way to something more raw. There, I met death without metaphor, and brotherhood beyond ideology.
        </p>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <img
          src={selfie2}
          alt="University of New Orleans campus"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        When I returned, I came home not as the man I had planned to become, but as the one who had been forged. I cared for my sister during her fight with brain cancer. I studied Philosophy and Physics at the University of New Orleans—not to secure a career, but to continue my interrogation of reality. Physics tried to give me the language of the cosmos. Philosophy gave me the courage to question it.
        </p>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-16">
        <img
          src={rcmgif}
          alt="Raccoon City Massacre live"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        All the while, the band returned—Raccoon City Massacre, a name not chosen by chance. It was rage with rhythm, absurdity with distortion. We played over 200 shows, not because we sought fame, but because something in us still refused to be silent. I booked the tours, taught the music, built the brand, and lifted others alongside me. It was resistance set to 4/4 time.
        </p>
      </div>

      {/* Section 7 */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
        <img
          src={coding}
          alt="Software development code screen"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <p className="md:w-1/2">
        I tried film. I tried storytelling. I made small horrors, small documentaries, even a YouTube channel that now feels like a relic of my own evolution. But something else had begun to stir. The final frontier. The return to the first signal: the code beneath it all. I enrolled in Operation Spark and began studying software development with the same hunger I’d once brought to music and war.
        Because if life is absurd, as Camus once said, then the response must be revolt. For me, that revolt is creation. I write code not to escape the absurd, but to shape it—to build systems that serve, games that inspire, and digital tools that dignify. After chasing Guitar Hero and Halo into the real world, my final mission is clear: I will build something worthy of the dreams that first led me to mod Civilization all those years ago.
        </p>
      </div>

      {/* Final Statement */}
      <div className="text-center mt-20">
        <blockquote className="italic text-xl mb-6">
          "The only way to deal with an unfree world is to become so absolutely free that
          your very existence is an act of rebellion."
        </blockquote>
        <p>
        This About Me section isn't intended to be a résumé. It's a chronicle of growth—a path carved through challenge, curiosity, and an unshakable will to create something meaningful.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;