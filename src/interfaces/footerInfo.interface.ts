
export interface SocialMediaItem {
    id: string;
    icon: string;
    href: string;
}

export interface footerNavigations {
    id: string;
    title: string;
    links: footerLink[];
}

export interface footerLink {
    label: string;
    href: string;
}