import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export default function Faq() {
    return (
        <section className="container mb-32 mt-48 px-4">
            <div className="title text-black flex justify-center text-5xl mb-16">FAQs</div>
            <Accordion type="single" collapsible className="mt-4 w-full">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        Is it free?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it&apos;s easy to tell the difference.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        Can I use these projects in my portfolio?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        Can I take the challenges as a beginner?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        For sure! Our challenges have five different levels of difficulty. We&apos;d recommend starting with the newbie ones. You might also want to start with the HTML &amp; CSS only challenges first. As you build up your skills and confidence, you can take on more complex projects.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        How do I start?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        You can see all of our challenges here. To start a challenge, click the &quot;Start Challenge&quot; button on the challenge page. This will take you to the Challenge Hub, where you can download the starter files, including a README file which will help you get set up. We&apos;d recommend starting with one of our newbie level challenges. You can then work your way up from there.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        How can I get help if I&apos;m stuck on a challenge?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it&apos;s a great place to ask questions. We even have a dedicated &quot;help&quot; channel! If you haven&apos;t joined yet, you can get an invite to our Discord server here.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        Can I use libraries/frameworks on these projects?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7" className="border border-gray-200 rounded-lg mb-4">
                    <AccordionTrigger className="text-2xl text-black flex justify-between items-center py-4 px-6 no-arrow">
                        Am I guaranteed to get hired through the Hiring Platform?
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-[#737373]">
                        We can&apos;t offer any guarantees, unfortunately. You can showcase your skills and knowledge to recruiters on our Hiring Platform by completing challenges and engaging with the community. This may lead to job opportunities, but it also may not. We still recommend applying for jobs using traditional channels like job boards.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    );
}
