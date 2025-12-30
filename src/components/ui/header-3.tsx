'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import type { LucideIcon } from 'lucide-react';
import {
	CodeIcon,
	GlobeIcon,
	LayersIcon,
	Users,
	Star,
	FileText,
	Shield,
	HelpCircle,
	BarChart,
	PlugIcon,
} from 'lucide-react';

type LinkItem = {
	title: string;
	href: string;
	icon: LucideIcon;
	description?: string;
};

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b transition-all duration-300',
				scrolled
					? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-white/20 shadow-lg shadow-black/5'
					: 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/10'
			)}
		>
			<nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4">
				<div className="flex items-center gap-5">
					<a
						href="#"
						className="hover:opacity-80 transition-opacity"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						<span className="text-xl font-bold text-blue-900 dark:text-blue-100 lato-bold drop-shadow-sm">
							JBG Logistics
						</span>
					</a>
					<NavigationMenu className="hidden md:flex">
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Servicios</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5">
									<ul className="bg-popover grid w-lg grid-cols-2 gap-2 rounded-md border p-2 shadow">
										{productLinks.map((item, i) => (
											<li key={i}>
												<ListItem {...item} />
											</li>
										))}
									</ul>
									<div className="p-2">
										<p className="text-muted-foreground text-sm">
											¿Interesado?{' '}
											<a href="#contacto" className="text-foreground font-medium hover:underline">
												Contáctanos
											</a>
										</p>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="bg-transparent">Empresa</NavigationMenuTrigger>
								<NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
									<div className="grid w-lg grid-cols-2 gap-2">
										<ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
											{companyLinks.map((item, i) => (
												<li key={i}>
													<ListItem {...item} />
												</li>
											))}
										</ul>
										<ul className="space-y-2 p-3">
											{companyLinks2.map((item, i) => (
												<li key={i}>
													<NavigationMenuLink
														href={item.href}
														className="flex p-2 hover:bg-accent flex-row rounded-md items-center gap-x-2"
													>
														<item.icon className="text-foreground size-4" />
														<span className="font-medium">{item.title}</span>
													</NavigationMenuLink>
												</li>
											))}
										</ul>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuLink className="px-4" asChild>
								<a href="#rastreo" className="hover:bg-accent rounded-md p-2">
									Rastreo
								</a>
							</NavigationMenuLink>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
				<div className="hidden items-center gap-2 md:flex">
					<Button variant="outline" onClick={() => window.location.href = '#contacto'}>Contacto</Button>
					<Button onClick={() => window.location.href = '#servicios'}>Cotizar</Button>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
				<NavigationMenu className="max-w-full">
					<div className="flex w-full flex-col gap-y-2">
						<span className="text-sm font-semibold">Servicios</span>
						{productLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						<span className="text-sm font-semibold mt-2">Empresa</span>
						{companyLinks.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
						{companyLinks2.map((link) => (
							<ListItem key={link.title} {...link} />
						))}
					</div>
				</NavigationMenu>
				<div className="flex flex-col gap-2">
					<Button variant="outline" className="w-full bg-transparent" onClick={() => window.location.href = '#contacto'}>
						Contacto
					</Button>
					<Button className="w-full" onClick={() => window.location.href = '#servicios'}>Cotizar</Button>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl',
				'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-white/20 md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

function ListItem({
	title,
	description,
	icon: Icon,
	className,
	href,
	...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
	return (
		<NavigationMenuLink className={cn('w-full flex flex-row gap-x-2 data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground rounded-sm p-2', className)} {...props} asChild>
			<a href={href}>
				<div className="bg-background/40 flex aspect-square size-12 items-center justify-center rounded-md border shadow-sm">
					<Icon className="text-foreground size-5" />
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="font-medium">{title}</span>
					<span className="text-muted-foreground text-xs">{description}</span>
				</div>
			</a>
		</NavigationMenuLink>
	);
}

const productLinks: LinkItem[] = [
	{
		title: 'Paquetería',
		href: '#servicios',
		description: 'Envíos rápidos y seguros a nivel internacional',
		icon: GlobeIcon,
	},
	{
		title: 'Carga Comercial',
		href: '#servicios',
		description: 'Transporte de grandes volúmenes',
		icon: LayersIcon,
	},
	{
		title: 'Agencia Aduanal',
		href: '#servicios',
		description: 'Gestión integral de trámites aduanales',
		icon: FileText,
	},
	{
		title: 'Transporte',
		href: '#servicios',
		description: 'Soluciones de transporte terrestre',
		icon: CodeIcon,
	},
	{
		title: 'Almacén',
		href: '#servicios',
		description: 'Almacenamiento seguro y gestión de inventario',
		icon: PlugIcon,
	},
	{
		title: 'Agentes Autorizados',
		href: '#servicios',
		description: 'Red de agentes certificados',
		icon: Users,
	},
];

const companyLinks: LinkItem[] = [
	{
		title: 'Nosotros',
		href: '#nosotros',
		description: 'Conoce nuestra historia y equipo',
		icon: Users,
	},
	{
		title: 'Cobertura',
		href: '#cobertura',
		description: 'Presencia en más de 50 países',
		icon: GlobeIcon,
	},
	{
		title: 'Testimonios',
		href: '#testimonios',
		icon: Star,
		description: 'Lo que dicen nuestros clientes',
	},
];

const companyLinks2: LinkItem[] = [
	{
		title: 'Rastreo',
		href: '#rastreo',
		icon: BarChart,
	},
	{
		title: 'Contacto',
		href: '#contacto',
		icon: HelpCircle,
	},
	{
		title: 'Política de Privacidad',
		href: '#',
		icon: Shield,
	},
	{
		title: 'Términos de Servicio',
		href: '#',
		icon: FileText,
	},
];


function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	// also check on first load
	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}

