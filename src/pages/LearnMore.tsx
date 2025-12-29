import { Home } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./LearnMore.css";

import scam1 from "/assets/scam.png";
import scam2 from "/assets/scam2.png";
import scam3 from "/assets/scam3.png";
import ScamNav from '@/pages/ScamNav';


const LearnMore = () => {
  const { t } = useTranslation();

  return (
    <div className="learn-more-container">
      <ScamNav />
      {/* Main Content */}
      <main className="main-content">
        <article className="article-container">

          {/* Hero Image */}
          <div className="hero-image">
            <img
              src={scam1}
              alt="Laptop showing scam website"
            />
          </div>

          {/* Article Header */}
          <header className="article-header">
            <h1 className="article-title">{t("beware_of_scam_offering_payment_for_reviewing_real_estate_listings")}</h1>
            <p className="article-meta">{t("september_17_2025_joannah_connolly_ab_bc_on_real_estate")}</p>
          </header>

          {/* Article Body */}
          <div className="article-body">

            <p className="article-paragraph">{t(
              "we_ve_all_been_targeted_with_one_fraudulent_scheme_or_another_at_some_point_in_our_adult_lives_now_there_is_a_very_realistic_looking_scam_that_falsely_claims_to_be_legitimate_paid_work_reviewing_home_listings_and_is_illegally_branded_with_homenest_s_logo_and_colour_palette"
            )}</p>

            <p className="article-paragraph">{t(
              "consumers_across_canada_are_warned_to_avoid_this_prolific_highly_convincing_scam_that_homenest_has_been_made_aware_of_by_concerned_consumers_some_of_whom_have_been_targeted_the_scammers_approach_victims_through_various_platforms_such_as_adding_whatsapp_and_telegram_users_to_the_scam_s_chat_groups_posting_jobs_on_linkedin_and_indeed_to_advertise_the_fake_opportunity_cold_calling_and_texting_victims_and_more"
            )}</p>

            <p className="article-paragraph">{t(
              "each_path_takes_the_unsuspecting_consumer_to_a_scam_website_that_illegally_uses_homenest_s_logo_and_branding_and_claims_to_offer_payment_to_analyze_and_promote_the_most_profitable_properties_on_a_freelance_basis_they_may_also_use_other_similar_methods_that_are_designed_to_make_victims_send_them_funds"
            )}</p>

            {/* scam2 */}
            <div className="content-image-wrapper">
              <img
                src={scam2}
                alt="Scam website screenshot"
                className="content-image"
              />
            </div>

            {/* scam3 */}
            <div className="content-image-wrapper">
              <p className="image-caption">{t(
                "image_screenshot_of_the_scam_website_home_page_falsely_branded_as_homenest"
              )}</p>
            </div>

            <p className="article-paragraph">{t(
              "like_many_such_scams_the_victims_are_asked_to_deposit_funds_into_an_account_to_get_the_job_with_the_promise_that_this_will_be_far_outweighed_by_earnings_this_is_followed_by_the_scammers_demanding_increasingly_high_deposits_to_keep_their_account_active"
            )}</p>

            <p className="article-paragraph">{t(
              "however_much_the_victim_pays_into_the_account_they_will_never_see_that_money_again_and_they_will_never_be_paid"
            )}</p>

            <h2 className="article-heading">{t("thousands_of_dollars_lost")}</h2>

            <p className="article-paragraph">{t(
              "homenest_has_learned_of_at_least_one_user_who_believed_the_scam_and_has_unfortunately_lost_thousands_of_dollars_that_they_cannot_recover_along_with_another_who_has_lost_hundreds"
            )}</p>

            <p className="article-paragraph">{t(
              "the_scam_also_uses_homenest_s_branding_on_letterhead_to_send_official_looking_watermarked_legal_breach_of_contract_notices_claiming_the_victim_did_not_file_their_work_within_a_certain_period_and_demanding_huge_fines_be_paid"
            )}</p>

            <p className="article-paragraph">{t(
              "homenest_has_received_a_copy_of_such_a_letter_from_a_scam_victim_who_reached_out_to_us_much_of_the_letter_s_text_is_extremely_badly_written_and_challenging_to_understand_what_is_clear_is_that_the_copy_homenest_received_demands_87_140_usdt_tether_a_form_of_cryptocurrency_in_payment_claiming_that_the_fine_will_be_refunded_if_the_full_amount_is_paid_and_threatening_legal_action_if_it_is_not_see_screenshot_below"
            )}</p>

            {/* scam3 again (letter screenshot) */}
            <div className="content-image-wrapper">
              <img
                src={scam3}
                alt="Scam letter screenshot"
                className="content-image with-border"
              />
              <p className="image-caption">{t(
                "image_screenshot_of_a_letter_sent_to_a_victim_of_the_scam_falsely_claiming_to_be_from_homenest"
              )}</p>
            </div>

            <p className="article-paragraph">{t(
              "the_letter_is_signed_john_steen_project_director_homenest_and_marked_with_a_convincing_looking_stamp_no_such_employee_or_role_exists_at_homenest_inc"
            )}</p>

            <h2 className="article-heading">{t("authorities_have_been_advised")}</h2>

            <p className="article-paragraph">{t(
              "the_homenest_team_can_confirm_that_this_fraudulent_scheme_has_no_link_of_any_kind_to_homenest_inc_or_any_of_its_associates_and_that_the_company_has_no_control_over_the_scammers_illegal_activity"
            )}</p>

            <p className="article-paragraph">{t(
              "homenest_further_wishes_to_clarify_that_it_never_makes_job_offers_via_whatsapp_or_telegram_nor_does_it_pay_users_for_clicking_on_listings_or_reviewing_them"
            )}</p>

            <p className="article-paragraph">{t(
              "michael_carney_homenest_s_director_of_business_development_said_we_at_homenest_are_appalled_that_scammers_are_hijacking_the_homenest_brand_to_shake_down_prospective_job_seekers_we_re_extremely_concerned_that_people_are_losing_money_and_we_want_to_sound_the_alarm_to_help_prevent_this_from_happening_to_anyone_else"
            )}</p>

            <p className="article-paragraph">{t(
              "homenest_has_now_notified_the_appropriate_law_enforcement_agencies_about_the_scam"
            )}</p>

            <p className="article-paragraph">{t(
              "any_users_who_are_concerned_about_possible_scams_branded_as_homenest_or_have_questions_about_the_legitimacy_of_roles_advertised_under_homenest_s_name_may_reach_out_to_us_at"
            )}{" "}
              <a href="mailto:scam-alerts@HomeNest.com" className="article-link">{t("scam_alerts_homenest_com")}</a>
            </p>

            {/* Tags */}
            <div className="tags-container">
              <span className="tag">{t("real_estate")}</span>
              <span className="tag">{t("scam")}</span>
            </div>

            {/* Navigation Links */}
            <div className="nav-links-container">
              <a className="nav-link-block">{t(
                "explore_edmonton_with_homenest_now_featuring_sold_data_from_edmonton_real_estate_board"
              )}</a>
              <a className="nav-link-block">{t(
                "from_clicks_to_footsteps_new_homenest_tool_gauges_buyer_competition_on_listings"
              )}</a>
            </div>

          </div>
        </article>
      </main>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a className="footer-link">{t("homenest_inc_brokerage")}</a>
            <a className="footer-link">{t("legal")}</a>
            <a className="footer-link">{t("privacy_security")}</a>
            <a className="footer-link">{t("terms_conditions")}</a>
            <a className="footer-link">{t("accessibility")}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnMore;
