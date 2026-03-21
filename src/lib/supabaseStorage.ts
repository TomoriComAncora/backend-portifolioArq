import { supabaseAdmin } from "./supabaseAdmin.js";

const bucket = process.env.SUPABASE_BUCKET;

if (!bucket) {
  throw new Error("Missing env SUPABASE_BUCKET");
}

export async function uploadPublicFile(params: {
  path: string;
  body: Buffer;
  contentType?: string;
}): Promise<{ publicUrl: string; path: string }> {
  const { data, error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(params.path, params.body, {
      contentType: params.contentType,
      upsert: false,
    });

  if (error) {
    throw new Error(`Supabase upload failed: ${error.message}`);
  }

  const { data: publicData } = supabaseAdmin.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return { publicUrl: publicData.publicUrl, path: data.path };
}
