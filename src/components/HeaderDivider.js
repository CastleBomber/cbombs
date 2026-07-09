export default function HeaderDivider({ className = '' }) {
    return (
        <div className={`header-gold-divider ${className}`.trim()} aria-hidden="true">
            <span className="header-gold-divider-line" />
            <span className="header-gold-divider-mark">
                <span className="header-gold-divider-chevron header-gold-divider-chevron--left" />
                <span className="header-gold-divider-diamond" />
                <span className="header-gold-divider-chevron header-gold-divider-chevron--right" />
            </span>
            <span className="header-gold-divider-line" />
        </div>
    );
}
