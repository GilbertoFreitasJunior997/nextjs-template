"use server";

import { ActionResult } from "@/lib/types";
import { UserAuth } from "@/models/user.model";
import { userService } from "@/services/user";

export const updateProfile = async ({
  id,
  name,
}: UserAuth): Promise<ActionResult> => {
  try {
    await userService.update(id, {
      name,
    });

    return {
      success: true,
      data: undefined,
    };
  } catch (e) {
    return {
      success: false,
      error: e,
    };
  }
};
