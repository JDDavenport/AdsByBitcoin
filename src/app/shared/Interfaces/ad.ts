export interface Ad {
    $key: string;
    destination_url: string;
    available: string;
    // impression_share_24_hour: number;
    // impressions_24_hour: number;
    // clicks_24_hour: number;
    // ctr_24_hour: number;
    creation_date: Date;
    // sub_domain: string;
    image_height: number;
    image_width: number;
    // image_size_limit: number;
    nsfw_score_limit: number;
    main_category: string;
    website_categories: Array<string>;
  }
  