import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetters from "./NewsLetters";
const MailChimpForm = () => {
  const url = `${process.env.POST_URL}?u=${process.env.POST_URL_MAIL_CHIMP_U}&id=${process.env.POST_URL_MAIL_CHIMP_ID}`;
  return (
    <>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <NewsLetters
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          </div>
        )}
      />
    </>
  );
};
export default MailChimpForm;
