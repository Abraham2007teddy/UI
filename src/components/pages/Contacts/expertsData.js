import { useTranslation } from 'react-i18next';

import expert1 from "../../../assets/images/experts/expert_1.png";
import expert2 from "../../../assets/images/experts/expert_2.png";
import expert3 from "../../../assets/images/experts/expert_3.png";
import expert4 from "../../../assets/images/experts/expert_4.png";
import expert5 from "../../../assets/images/experts/expert_5.png";
import expert6 from "../../../assets/images/experts/expert_6.png";
import expert7 from "../../../assets/images/experts/expert_7.png";
import expert8 from "../../../assets/images/experts/expert_8.png";
import expert9 from "../../../assets/images/experts/expert_9.png";
import expert10 from "../../../assets/images/experts/expert_10.png";
import expert11 from "../../../assets/images/experts/expert_11.png";
import expert12 from "../../../assets/images/experts/expert_12.png";
import expert13 from "../../../assets/images/experts/expert_13.png";
import expert14 from "../../../assets/images/experts/expert_14.png";
import expert15 from "../../../assets/images/experts/expert_15.png";
import expert16 from "../../../assets/images/experts/expert_16.png"; // Unique name for the duplicate image
import expert17 from "../../../assets/images/experts/expert_17.png"; // Unique name for the duplicate image
import expert18 from "../../../assets/images/experts/expert_18.png"; // Unique name for the duplicate image

const expertsData = () => {
    const { t } = useTranslation();  // get translation function

    return [
        { name: t('experts.john_doe.name'), expertise: t('experts.john_doe.expertise'), phone: "+1 123 456 7890", email: "john.doe@example.com", photo: expert1 },
        { name: t('experts.jane_smith.name'), expertise: t('experts.jane_smith.expertise'), phone: "+1 987 654 3210", email: "jane.smith@example.com", photo: expert2 },
        { name: t('experts.michael_lee.name'), expertise: t('experts.michael_lee.expertise'), phone: "+44 789 654 3210", email: "michael.lee@example.com", photo: expert3 },
        { name: t('experts.sophia_brown.name'), expertise: t('experts.sophia_brown.expertise'), phone: "+49 176 1234 5678", email: "sophia.brown@example.com", photo: expert4 },
        { name: t('experts.liam_garcia.name'), expertise: t('experts.liam_garcia.expertise'), phone: "+33 612 345 678", email: "liam.garcia@example.com", photo: expert5 },
        { name: t('experts.olivia_martinez.name'), expertise: t('experts.olivia_martinez.expertise'), phone: "+39 320 987 6543", email: "olivia.martinez@example.com", photo: expert6 },
        { name: t('experts.william_harris.name'), expertise: t('experts.william_harris.expertise'), phone: "+61 400 123 456", email: "william.harris@example.com", photo: expert7 },
        { name: t('experts.emma_wilson.name'), expertise: t('experts.emma_wilson.expertise'), phone: "+1 555 222 3333", email: "emma.wilson@example.com", photo: expert8 },
        { name: t('experts.ethan_carter.name'), expertise: t('experts.ethan_carter.expertise'), phone: "+1 234 567 8901", email: "ethan.carter@example.com", photo: expert9 },
        { name: t('experts.ava_robinson.name'), expertise: t('experts.ava_robinson.expertise'), phone: "+44 123 456 7890", email: "ava.robinson@example.com", photo: expert10 },
        { name: t('experts.noah_adams.name'), expertise: t('experts.noah_adams.expertise'), phone: "+1 987 654 3210", email: "noah.adams@example.com", photo: expert11 },
        { name: t('experts.isabella_thompson.name'), expertise: t('experts.isabella_thompson.expertise'), phone: "+49 176 1234 5678", email: "isabella.thompson@example.com", photo: expert12 },
        { name: t('experts.lucas_white.name'), expertise: t('experts.lucas_white.expertise'), phone: "+33 612 345 678", email: "lucas.white@example.com", photo: expert13 },
        { name: t('experts.mia_johnson.name'), expertise: t('experts.mia_johnson.expertise'), phone: "+39 320 987 6543", email: "mia.johnson@example.com", photo: expert14 },
        { name: t('experts.benjamin_hall.name'), expertise: t('experts.benjamin_hall.expertise'), phone: "+61 400 123 456", email: "benjamin.hall@example.com", photo: expert15 },
        { name: t('experts.charlotte_evans.name'), expertise: t('experts.charlotte_evans.expertise'), phone: "+1 555 222 3333", email: "charlotte.evans@example.com", photo: expert16 },
        { name: t('experts.daniel_scott.name'), expertise: t('experts.daniel_scott.expertise'), phone: "+44 789 654 3210", email: "daniel.scott@example.com", photo: expert17 },
        { name: t('experts.ella_lewis.name'), expertise: t('experts.ella_lewis.expertise'), phone: "+33 612 345 678", email: "ella.lewis@example.com", photo: expert18 },
    ];
};

export default expertsData;


