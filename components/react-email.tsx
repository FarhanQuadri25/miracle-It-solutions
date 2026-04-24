import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Preview,
  Font,
} from "react-email";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>
        New message from {name} — {subject}
      </Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header bar */}
          <Section style={header}>
            <Text style={headerLabel}>MIRACLE IT SOLUTIONS</Text>
            <Text style={headerSub}>New Contact Form Submission</Text>
          </Section>

          {/* Meta row */}
          <Section style={metaRow}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={metaCell}>
                    <Text style={metaLabel}>FROM</Text>
                    <Text style={metaValue}>{name}</Text>
                  </td>
                  <td style={metaCell}>
                    <Text style={metaLabel}>EMAIL</Text>
                    <Text style={metaValue}>{email}</Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Subject */}
          <Section style={subjectSection}>
            <Text style={metaLabel}>SUBJECT</Text>
            <Text style={subjectText}>{subject}</Text>
          </Section>

          <Hr style={divider} />

          {/* Message */}
          <Section style={messageSection}>
            <Text style={metaLabel}>MESSAGE</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={divider} />

          {/* Footer */}
          <Section style={footerSection}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Miracle IT Solutions · This email was
              sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body: React.CSSProperties = {
  backgroundColor: "#f0f0e8",
  fontFamily: "Inter, Arial, sans-serif",
  margin: 0,
  padding: "32px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  maxWidth: "560px",
  margin: "0 auto",
  border: "2px solid #1a1a1a",
  boxShadow: "6px 6px 0px 0px #1a1a1a",
};

const header: React.CSSProperties = {
  backgroundColor: "#1a1a1a",
  padding: "24px 32px",
  borderBottom: "2px solid #1a1a1a",
};

const headerLabel: React.CSSProperties = {
  color: "#E76F51",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  margin: "0 0 4px 0",
};

const headerSub: React.CSSProperties = {
  color: "#f0f0e8",
  fontSize: "18px",
  fontWeight: 900,
  letterSpacing: "-0.03em",
  textTransform: "uppercase",
  margin: 0,
};

const metaRow: React.CSSProperties = {
  padding: "24px 32px 0",
};

const metaCell: React.CSSProperties = {
  width: "50%",
  paddingBottom: "16px",
  verticalAlign: "top",
};

const metaLabel: React.CSSProperties = {
  color: "#9a9a9a",
  fontSize: "9px",
  fontWeight: 700,
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  margin: "0 0 4px 0",
};

const metaValue: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "13px",
  fontWeight: 700,
  margin: 0,
};

const subjectSection: React.CSSProperties = {
  padding: "0 32px 24px",
};

const subjectText: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "15px",
  fontWeight: 900,
  letterSpacing: "-0.02em",
  margin: "4px 0 0 0",
  backgroundColor: "#f0f0e8",
  padding: "10px 14px",
  borderLeft: "3px solid #E76F51",
};

const divider: React.CSSProperties = {
  margin: "0 32px",
};

const messageSection: React.CSSProperties = {
  padding: "24px 32px",
};

const messageText: React.CSSProperties = {
  color: "#444",
  fontSize: "14px",
  lineHeight: "1.8",
  fontWeight: 400,
  margin: "4px 0 0 0",
  whiteSpace: "pre-wrap",
};

const footerSection: React.CSSProperties = {
  padding: "16px 32px",
  backgroundColor: "#f0f0e8",
};

const footerText: React.CSSProperties = {
  color: "#9a9a9a",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  margin: 0,
  textAlign: "center",
};
