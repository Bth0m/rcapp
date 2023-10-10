const API_KEY_SUPA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb3hwb3d1ZGJzam9rZ3hhZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjMwMTMsImV4cCI6MjAwMzAzOTAxM30.rOIK9C6yuBYx8hXwE62B5QhN4r4ChEPapj8d8Exh-u8";

const TOKEN_SUPA =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb3hwb3d1ZGJzam9rZ3hhZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjMwMTMsImV4cCI6MjAwMzAzOTAxM30.rOIK9C6yuBYx8hXwE62B5QhN4r4ChEPapj8d8Exh-u8";

export const sendEventComment = async ({ comment, id }) => {
  await fetch(
    `https://ddoxpowudbsjokgxafzw.supabase.co/rest/v1/listado?id=eq.${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: API_KEY_SUPA,
        Authorization: TOKEN_SUPA,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        comment: comment,
      }),
    }
  );
};

export const getEvents = async () => {
  return await fetch(
    `https://ddoxpowudbsjokgxafzw.supabase.co/rest/v1/listado?select=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb3hwb3d1ZGJzam9rZ3hhZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjMwMTMsImV4cCI6MjAwMzAzOTAxM30.rOIK9C6yuBYx8hXwE62B5QhN4r4ChEPapj8d8Exh-u8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkb3hwb3d1ZGJzam9rZ3hhZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjMwMTMsImV4cCI6MjAwMzAzOTAxM30.rOIK9C6yuBYx8hXwE62B5QhN4r4ChEPapj8d8Exh-u8",
      },
    }
  ).then((response) => response.json());
};
