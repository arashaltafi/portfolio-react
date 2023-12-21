import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

enum LinkType {
    GITHUB = 'github',
    GITLAB = 'gitlab',
    TELEGRAM = 'telegram',
    WHATSAPP = 'whatsapp',
    INSTAGRAM = 'instagram',
    DRIBBBLE = 'dribbble',
    LINKEDIN = 'linkedin',
}

const FooterComponent = () => {

    const handleClickLink = (linkType: LinkType) => {
        switch (linkType) {
            case LinkType.GITHUB:
                window.open('https://github.com/arashaltafi', '_blank');
                break;
            case LinkType.GITLAB:
                window.open('https://gitlab.com/arashaltafi', '_blank');
                break;
            case LinkType.TELEGRAM:
                window.open('https://t.me/arashaltafi1377', '_blank');
                break;
            case LinkType.WHATSAPP:
                window.open('https://api.whatsapp.com/send/?phone=989187677641', '_blank');
                break;
            case LinkType.INSTAGRAM:
                window.open('https://instagram.com/arashaltafi', '_blank');
                break;
            case LinkType.DRIBBBLE:
                window.open('https://dribbble.com/arashaltafi', '_blank');
                break;
            case LinkType.LINKEDIN:
                window.open('https://linkedin.com/in/arashaltafi', '_blank');
                break;
            default:
                break;
        }
    }

    return (
        <footer
            className='flex flex-row items-stretch justify-end py-6 px-8 lg:py-8 lg:pr-12 mb-4 gap-28 xl:gap-36 lg:gap-48'>
            <div className='child:font-normal child:text-gray-300 hidden md:flex flex-col items-center justify-center gap-6'>
                <p className="rotate-90 text-xs md:text-sm lg:text-lg text-gray-300">Follow Me</p>
                <span className="h-[1px] w-24 self-center bg-gray-300 mt-20 mb-16 rotate-90"></span>
                <FaGithub className="subtitle" onClick={() => handleClickLink(LinkType.GITHUB)} />
                <FaGitlab className="subtitle" onClick={() => handleClickLink(LinkType.GITLAB)} />
                <FaTelegram className="subtitle" onClick={() => handleClickLink(LinkType.TELEGRAM)} />
                <FaWhatsapp className="subtitle" onClick={() => handleClickLink(LinkType.WHATSAPP)} />
                <FaInstagram className="subtitle" onClick={() => handleClickLink(LinkType.INSTAGRAM)} />
                <FaDribbble className="subtitle" onClick={() => handleClickLink(LinkType.DRIBBBLE)} />
                <FaLinkedin className="subtitle" onClick={() => handleClickLink(LinkType.LINKEDIN)} />
            </div>

            <div className='hidden md:flex flex-col items-end justify-end  flex-1'>
                <div className="child:subtitle-withouthover child:font-normal child:text-gray-300 flex flex-col items-start justify-center gap-3">
                    <p>I'm <span className="text-green-500 font-bold">Android & Web</span> Developer</p>
                    <p><span className="text-purple-500 font-bold">Kotlin</span> & <span className="text-sky-500">React</span></p>
                </div>
            </div>

            <div className='child:subtitle child:font-normal child:text-gray-300 hidden md:flex flex-col items-start justify-end gap-3'>
                <p>E: <span className="font-bold">arashaltafi1377@gmail.com</span></p>
                <p>T: <span className="font-bold">+98 918 767 7641</span></p>
            </div>
        </footer>
    )
}

export default FooterComponent