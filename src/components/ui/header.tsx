'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';

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

	const navLinks = [
		{ name: 'Servicios', href: '#servicios' },
		{ name: 'Nosotros', href: '#nosotros' },
		{ name: 'Cobertura', href: '#cobertura' },
		{ name: 'Rastreo', href: '#rastreo' },
		{ name: 'Contacto', href: '#contacto' },
	];

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		setOpen(false);
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
				<div className="flex items-center gap-8">
					<a
						href="#"
						className="hover:opacity-80 transition-opacity"
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo({ top: 0, behavior: 'smooth' });
						}}
					>
						<span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600 dark:from-blue-100 dark:to-blue-300 lato-bold">
							JBG Logistics
						</span>
					</a>
					<div className="hidden md:flex items-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => handleNavClick(e, link.href)}
								className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors hover:text-primary"
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
				<div className="hidden items-center gap-3 md:flex">
					<Button variant="outline" size="sm">
						Iniciar Sesión
					</Button>
					<Button size="sm">
						Cotizar
					</Button>
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
			<MobileMenu open={open} className="flex flex-col justify-between gap-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							onClick={(e) => handleNavClick(e, link.href)}
							className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent"
						>
							{link.name}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-3 pt-4 border-t">
					<Button variant="outline" className="w-full">
						Iniciar Sesión
					</Button>
					<Button className="w-full">
						Cotizar
					</Button>
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
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
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

function useScroll(threshold: number) {
	const [scrolled, setScrolled] = React.useState(false);

	const onScroll = React.useCallback(() => {
		setScrolled(window.scrollY > threshold);
	}, [threshold]);

	React.useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	React.useEffect(() => {
		onScroll();
	}, [onScroll]);

	return scrolled;
}
