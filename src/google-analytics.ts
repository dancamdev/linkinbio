export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const logPageView = (url: string) => {
    (window as any).gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

type LogEventProps = {
    ///  The value that will appear as the event action in Google Analytics Event reports.
    action: string;
    category: string;
    label: string;
    /// A non-negative integer that will appear as the event value.
    value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = ({ action, category, label, value }: LogEventProps) => {
    (window as any).gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

export const logLinkClicked = (link: string) => {
    logEvent({
        action: "link_clicked",
        category: "clicks",
        label: link,
        value: 1,
    });
}
