import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const PrivaryPolicy: React.FC = () => {
  return (
    <Container>
      <Box sx={{ py: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h1" gutterBottom mb={6}>
          Politique de Confidentialité
        </Typography>

        <Typography variant="h3" gutterBottom>
          1. Introduction
        </Typography>
        <Typography paragraph>
          Bienvenue sur QNG Capital. La protection de vos informations
          personnelles est importante pour nous. Cette Politique de
          Confidentialité explique comment nous collectons, utilisons, stockons
          et protégeons vos données personnelles lorsque vous utilisez notre
          site et nos services de formation en trading.
        </Typography>

        <Typography variant="h3" gutterBottom>
          2. Informations Collectées
        </Typography>
        <Typography paragraph>
          Nous recueillons des informations que vous nous fournissez
          directement, comme votre nom, adresse e-mail, et autres informations
          de contact lorsque vous vous inscrivez à nos formations ou que vous
          nous contactez. Nous collectons également des informations
          automatiquement lorsque vous utilisez notre site, telles que les
          adresses IP, les informations sur le navigateur et les pages visitées.
        </Typography>

        <Typography variant="h3" gutterBottom>
          3. Utilisation des Informations
        </Typography>
        <Typography paragraph>
          Nous utilisons vos informations pour vous fournir nos services,
          améliorer notre site, communiquer avec vous, et vous envoyer des
          informations importantes concernant vos formations. Nous pouvons
          également utiliser vos données pour vous envoyer des offres et des
          mises à jour que vous pouvez choisir de recevoir.
        </Typography>

        <Typography variant="h3" gutterBottom>
          4. Partage des Informations
        </Typography>
        <Typography paragraph>
          Nous ne partageons vos informations personnelles avec des tiers que
          dans les cas suivants :
          <ul>
            <li>Pour respecter les obligations légales ou réglementaires.</li>
            <li>Pour protéger et défendre nos droits ou notre propriété.</li>
            <li>
              Avec des fournisseurs de services tiers qui nous aident à gérer
              notre site et nos services, sous réserve de leur accord de
              confidentialité.
            </li>
          </ul>
        </Typography>

        <Typography variant="h3" gutterBottom>
          5. Sécurité des Données
        </Typography>
        <Typography paragraph>
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos informations personnelles contre la perte, l'abus et
          l'accès non autorisé. Cependant, aucune méthode de transmission sur
          Internet ou de stockage électronique n'est complètement sécurisée, et
          nous ne pouvons garantir une sécurité absolue.
        </Typography>

        <Typography variant="h3" gutterBottom>
          6. Vos Droits
        </Typography>
        <Typography paragraph>
          Vous avez le droit d'accéder à vos informations personnelles, de les
          corriger ou de les supprimer. Vous pouvez également vous opposer au
          traitement de vos données ou demander la limitation de leur
          utilisation. Pour exercer ces droits, veuillez nous contacter à
          l'adresse e-mail fournie ci-dessous.
        </Typography>

        <Typography variant="h3" gutterBottom>
          7. Modifications de la Politique
        </Typography>
        <Typography paragraph>
          Nous pouvons mettre à jour cette Politique de Confidentialité de temps
          à autre. Les modifications seront publiées sur cette page avec une
          date de mise à jour. Nous vous encourageons à consulter régulièrement
          cette politique pour être informé de toute modification.
        </Typography>

        <Typography variant="h3" gutterBottom>
          8. Contact
        </Typography>
        <Typography paragraph>
          Si vous avez des questions ou des préoccupations concernant cette
          Politique de Confidentialité, veuillez nous contacter à :{" "}
          <Link href="mailto:contact@qngcapital.com">
            contact@qngcapital.com
          </Link>
          ou via notre formulaire de contact sur
          <Link href="/">notre site</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivaryPolicy;
