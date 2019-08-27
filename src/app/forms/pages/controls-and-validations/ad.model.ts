export interface Ad {
    $key: string;
    domain_url: string;
    owner_email: string;
    available: string;
    impression_share_24_hour?: number;
    impressions_24_hour?: number;
    clicks_24_hour?: number;
    ctr_24_hour?: number;
    creation_date: Date;
    sub_domain?: string;
    image_height: number;
    image_width: number;
    image_size_limit?: number;
    country: string;
    nsfw_score_limit: number;
    demographic: string;
    terms: boolean;
    website_categories?: Array<string>;
    purchase_price: number;
    limit_reserve: number;
    fee: number;
    next_fee_date?: Date;
    trend_30_days?: number;
    current_lease: string;
    owned_by: string;
  }
  