import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const TermsOfService: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: 4, display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant="h1" gutterBottom mb={6}>
          Conditions Générales
        </Typography>

        <Typography variant="h3" gutterBottom>
          1. Introduction
        </Typography>
        <Typography paragraph>
          Bienvenue sur QNG Capital. Les présentes Conditions Générales
          régissent votre utilisation de nos services de formation en trading.
          En accédant à notre site et en utilisant nos services, vous acceptez
          ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas
          utiliser notre site.
        </Typography>

        <Typography variant="h3" gutterBottom>
          2. Services Proposés
        </Typography>
        <Typography paragraph>
          Nous offrons trois types de formations en trading :
          <ul>
            <li>
              <strong>Basic</strong> : Signaux de trading via un canal Telegram.
            </li>
            <li>
              <strong>Premium</strong> : Sessions de coaching en direct.
            </li>
            <li>
              <strong>Ultimate</strong> : Mentorat personnalisé 1-to-1.
            </li>
          </ul>
        </Typography>

        <Typography variant="h3" gutterBottom>
          3. Inscription et Paiement
        </Typography>
        <Typography paragraph>
          <strong>Inscription</strong> : Pour vous inscrire à nos formations,
          vous devez remplir le formulaire d'inscription et effectuer le
          paiement selon le type de formation choisi.
          <br />
          <strong>Paiement</strong> : Les paiements peuvent être effectués via
          les méthodes disponibles sur notre site. Les frais sont non
          remboursables, sauf indication contraire.
        </Typography>

        <Typography variant="h3" gutterBottom>
          4. Accès aux Contenus
        </Typography>
        <Typography paragraph>
          <strong>Basic</strong> : Vous recevrez les signaux de trading via un
          canal Telegram. L'accès est valable tant que vous êtes abonné.
          <br />
          <strong>Premium</strong> : Vous aurez accès aux sessions de coaching
          en direct et aux enregistrements des sessions. L’accès est limité à la
          durée de votre abonnement.
          <br />
          <strong>Ultimate</strong> : Vous bénéficierez de sessions de mentorat
          1-to-1. L’accès aux sessions et au contenu est limité à la durée de
          votre abonnement.
        </Typography>

        <Typography variant="h3" gutterBottom>
          5. Utilisation des Services
        </Typography>
        <Typography paragraph>
          <strong>Responsabilités</strong> : Vous êtes responsable de
          l'utilisation de vos informations de connexion et devez veiller à ce
          que votre compte ne soit pas utilisé par des tiers non autorisés.
          <br />
          <strong>Comportement</strong> : Vous devez respecter les règles de
          conduite lors de l'utilisation de nos services et éviter tout
          comportement inapproprié ou illégal.
        </Typography>

        <Typography variant="h3" gutterBottom>
          6. Propriété Intellectuelle
        </Typography>
        <Typography paragraph>
          Tout le contenu disponible sur notre site, y compris les formations,
          les signaux de trading, et les documents associés, est protégé par des
          droits de propriété intellectuelle. Vous ne pouvez pas reproduire,
          distribuer ou utiliser ce contenu sans notre autorisation préalable.
        </Typography>

        <Typography variant="h3" gutterBottom>
          7. Limitation de Responsabilité
        </Typography>
        <Typography paragraph>
          Nos formations sont fournies à titre d'information et d'éducation. Les
          performances passées ne garantissent pas les résultats futurs. Nous ne
          sommes pas responsables des pertes financières ou des dommages
          résultant de l'utilisation de nos services.
        </Typography>

        <Typography variant="h3" gutterBottom>
          8. Confidentialité
        </Typography>
        <Typography paragraph>
          Nous respectons votre vie privée et nous engageons à protéger vos
          informations personnelles conformément à notre{" "}
          <Link href="/privacy-policy">Politique de Confidentialité</Link>. En
          utilisant notre site, vous acceptez notre politique en matière de
          protection des données.
        </Typography>

        <Typography variant="h3" gutterBottom>
          9. Modifications des Conditions
        </Typography>
        <Typography paragraph>
          Nous nous réservons le droit de modifier ces Conditions Générales à
          tout moment. Les modifications seront publiées sur notre site. Votre
          utilisation continue de nos services après de telles modifications
          constitue votre acceptation des nouvelles conditions.
        </Typography>

        <Typography variant="h3" gutterBottom>
          10. Résiliation
        </Typography>
        <Typography paragraph>
          Nous nous réservons le droit de résilier ou de suspendre votre accès à
          nos services en cas de violation de ces conditions ou de comportement
          inapproprié.
        </Typography>

        <Typography variant="h3" gutterBottom>
          11. Contact
        </Typography>
        <Typography paragraph>
          Pour toute question concernant ces Conditions Générales ou nos
          services, veuillez nous contacter à :{" "}
          <Link href="mailto:contact@qngcapital.com">
            contact@qngcapital.com
          </Link>{" "}
          ou via notre formulaire de contact sur{" "}
          <Link href="/">notre site</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfService;
