export interface LooDetails {
    id: number;
    name: string;
    description: string;
    is_available: boolean;
    last_cleaned_time: Date;
    cleaningInfo: string;
    category_id: number;
    geoLocation: string;
    createdAt: Date;
    updatedAt: Date;
}
