import styles from "./AlbertaDisclaimer.module.css";

const AlbertaDisclaimer = () => {
  return (
    <div className={styles.disclaimerSection}>
      <p>
        Data is supplied by Pillar 9™ MLS® System. Pillar 9™ is the owner of the
        copyright in its MLS® System. Data is deemed reliable but is not
        guaranteed accurate by Pillar 9™. The trademarks MLS®, Multiple Listing
        Service® and the associated logos are owned by The Canadian Real Estate
        Association (CREA) and identify the quality of services provided by real
        estate professionals who are members of CREA. Used under license.
      </p>

      <p>
        Data is deemed reliable but is not guaranteed accurate by the REALTORS®
        Association of Edmonton. Copyright 2025 by the REALTORS® Association of
        Edmonton. All Rights Reserved.
      </p>

      <p>
        The trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled
        by The Canadian Real Estate Association (CREA) and identify real estate
        professionals who are members of CREA. The trademarks MLS®, Multiple
        Listing Service® and the associated logos are owned by CREA and identify
        the quality of services provided by real estate professionals who are
        members of CREA. Used under license.
      </p>

      <p>Data is provided courtesy of Canadian Real Estate Association.</p>
    </div>
  );
};

export default AlbertaDisclaimer;
