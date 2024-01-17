export type LocalAnime = {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    canonicalTitle: string;

    synopsis: string;

    titles: {
      en_jp: string;
      ja_jp: string;
    };

    abbreviatedTitles: string[];
    averageRating: string;

    startDate: string;
    endDate: string;

    // subtype: "TV";
    status: string;

    posterImage: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      original: string;
    };

    episodeCount: number;
    episodeLength: 25;
    // youtubeVideoId: "qig4KOK2R2g";
    showType: string;
  };
  relationships: {
    genres: {
      links: {
        self: string;
        related: string;
      };
    };
    categories: {
      links: {
        self: string;
        related: string;
      };
    };
  };
};
