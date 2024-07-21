import moment from "moment";
import React from 'react';

import UnderlineLink from "@/components/links/UnderlineLink";


export default async function SiteSection() {
    return (
        <div
            className="main-box w-full items-center text-center gap-8 py-8"
        >
            &copy; {moment().format('YYYY')} Dika Mahendra v4.0. All rights reserved.<br/>
            Rewrited in <UnderlineLink href="https://nextjs.org/" target="_blank">NextJS</UnderlineLink>. UI by <UnderlineLink href="https://tailwindcss.com/" target="_blank">TailwindCSS</UnderlineLink> and <UnderlineLink href="https://preline.co/" target="_blank">Preline UI</UnderlineLink>.<br/>
            <UnderlineLink href="https://github.com/tokotype/PlusJakartaSans" target="_blank">+Jakarta Sans</UnderlineLink> font by <i>tokotype</i> and provided by <UnderlineLink href="https://fonts.google.com/" target="_blank">Google Fonts</UnderlineLink>, icons by <UnderlineLink href="https://fontawesome.com/" target="_blank">Font Awesome</UnderlineLink>.<br/>
            Website hosted on <UnderlineLink href="https://vercel.com/" target="_blank">Vercel</UnderlineLink>, content hosted and managed on <UnderlineLink href="https://contentful.com/">Contentful</UnderlineLink>.<br/>
        </div>
    );
}
